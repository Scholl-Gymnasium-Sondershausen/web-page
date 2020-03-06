import React, { Component } from 'react';
import {
    Table
} from 'react-bootstrap';
class RepresentationPlanItem extends Component {
    render() {
        let { item } = this.props
        console.log(this.props)
        return (
            <>
                <Table striped bordered hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th>
                                Klasse
                            </th>
                            <th>
                                Stunde
                            </th>
                            <th>
                                Fach
                            </th>
                            <th>
                                Lehrer
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
                        {(item !== undefined) &&
                            item.map((replacementsItem) => {
                                return (
                                    <tr>
                                        <td>{replacementsItem.class}</td>
                                        <td>{replacementsItem.hour}</td>
                                        <td>{replacementsItem.subject}</td>
                                        <td>{replacementsItem.teachers.map((teacher) => {
                                            return teacher.gender + " " + teacher.Surname
                                        })}</td>
                                        <td>{replacementsItem.room}</td>
                                        <td>{replacementsItem.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </>
        )
    }

}

export default RepresentationPlanItem;