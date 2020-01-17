import React, {Component} from 'react';
import {Button} from "react-bootstrap"
class DetailView extends Component{
    render() {
        let {changeContent} = this.props
        return(
            <>
                {this.props.zhl}

                <Button onClick={changeContent}>
                    hi
                </Button>
                </>
        )
    }

}

export default DetailView;