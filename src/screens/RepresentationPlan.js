import React, {Component} from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Modal,
    Row
} from 'react-bootstrap';
import RpPlanData from "../Vertretungsplan.json"
import RepresentationPlanItem from "../components/RepresentationPlanItem"
class RepresentationPlan extends Component{
    render() {
        console.log(RpPlanData)
        return(
            <>
{
                        RpPlanData.map((item) =>{
                            return (
                                <RepresentationPlanItem item={item} key={item["_id"]}/>
                            )
                        })
                    }
            </>
        )
    }

}

export default RepresentationPlan;