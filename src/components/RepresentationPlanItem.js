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
class RepresentationPlanItem extends Component{
    render() {
        let {item} = this.props
        return(
            <>
             <div>{item.Schulname} --- {item.DatumTitle}</div>
             <ul>
                 {
                     
             item.replacements.map((replacementsItem) =>{
                return (
                    <li>{replacementsItem.hour} ---{replacementsItem.subject} --- {replacementsItem.room} --- {replacementsItem.description}</li>
                )
            })
                 }
             </ul>
            </>
        )
    }

}

export default RepresentationPlanItem;