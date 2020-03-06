import React, { Component } from 'react';

import { Button } from "react-bootstrap"
class MasterDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            replacement: []
        }
    }

    fetchService() {
        fetch("https://cf-scholl-gym-cms.cfapps.eu10.hana.ondemand.com/representationPlan?_sort=createDate:desc&_limit=1&DatumTitleDate=2020-02-06")
            .then(response => response.json())
            .then(async (data) => {
                await this.setState({ data })
                if (data.length > 0) {
                    let item = data[0]
                    await this.fetchReplacements(item["_id"])
                }
            });
    }

    fetchReplacements(id) {
        fetch("https://cf-scholl-gym-cms.cfapps.eu10.hana.ondemand.com/replacements?representationPlan=" + id)
            .then(response => response.json())
            .then(replacement => this.setState({ replacement }));
    }

    render() {
        return (
            <div>
                {this.state.data.length <= 0 &&
                    <Button onClick={this.fetchService.bind(this)}>fetch data</Button>
                }
                {
                    this.state.data.map((item) => {
                        return (
                            <>
                                <div>{item.DatumTitle}</div>
                                <ul>
                                    {
                                        this.state.replacement.map((replacementsItem) => {
                                            return (
                                                <li>{replacementsItem.hour} | {replacementsItem.subject} | {replacementsItem.room} | {replacementsItem.description}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        )
                    })
                }
            </div>
        )
    }

}

export default MasterDetail;