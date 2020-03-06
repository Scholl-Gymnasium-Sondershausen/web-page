import React, { Component } from 'react';
import {
    Dropdown
} from 'react-bootstrap';
import Moment from "moment";
import "moment/locale/de";
import RepresentationPlanItem from "../components/RepresentationPlanItem"
class RepresentationPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            replacement: [],
            dates: [],
            currentDay: Moment().format("YYYY-MM-DD")
        }
    }

    componentDidMount() {
        this.fetchDates()
        this.fetchService()
    }

    fetchDates() {
        fetch("https://cf-scholl-gym-cms.cfapps.eu10.hana.ondemand.com/representationPlan/validDates")
            .then(response => response.json())
            .then(async (dates) => {
                dates = dates.map((date) => {
                    return date.value
                })
                dates = dates.reverse()
                await this.setState({ dates })
            });
    }

    fetchService() {
        fetch("https://cf-scholl-gym-cms.cfapps.eu10.hana.ondemand.com/representationPlan?_sort=createDate:desc&_limit=1&DatumTitleDate=" + this.state.currentDay)
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
        console.log(this.state.dates)
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="Dark" id="dropdown-basic">
                        {Moment(this.state.currentDay, "YYYY-MM-DD").format("DD. MMMM YYYY")}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>{
                        this.state.dates.map((dateItem) => {
                            return (
                                <>
                                    <Dropdown.Item>{Moment(dateItem, "YYYY-MM-DDT00:00:00.000Z").format("DD. MMMM YYYY")}</Dropdown.Item>
                                </>
                            )
                        })
                    }
                    </Dropdown.Menu>
                </Dropdown>

                <RepresentationPlanItem item={this.state.replacement} />
            </>
        )
    }

}

export default RepresentationPlan;