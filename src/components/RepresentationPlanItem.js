import React, { Component } from 'react';
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
class RepresentationPlanItem extends Component {
    render() {
        let { item } = this.props
        return (
            <>
                <div>{item.Schulname} --- {item.DatumTitle}</div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Stunde
                            </th>
                            <th>
                                Fach
                            </th>
                            <th>
                                Raum
                            </th>
                            <th>
                                Info
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.replacements.map((replacementsItem) => {
                                return (
                                    <tr>
                                        <td>{replacementsItem.hour}</td>
                                        <td>{replacementsItem.subject}</td>
                                        <td>{replacementsItem.room}</td>
                                        <td>{replacementsItem.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }

}

export default RepresentationPlanItem;