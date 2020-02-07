import React, {Component} from 'react';

import {Button} from "react-bootstrap"
class MasterDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {value: []},
        }
    }
    fetchService(){
        fetch("https://services.odata.org/TripPinRESTierService/People")
            .then(response => response.json())
            .then(data => this.setState({ data }));
        }

    render() {
        return(
                <div>
                    {this.state.data.value.length <= 0 &&
                    <Button onClick={this.fetchService.bind(this)}>fetch data</Button>
                        }
                    {
                        this.state.data.value.map((item) =>{
                            return (
                                <div>{item.UserName}</div>
                            )
                        })
                    }
                </div>
        )
    }

}

export default MasterDetail;