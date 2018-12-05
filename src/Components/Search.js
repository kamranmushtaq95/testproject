import React from "react";
import { connect } from 'react-redux';

import { setTitle } from '../Redux/Actions';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    handleChange (event) {
        console.log("new value", event.target.value);
        this.props.onSetTitle(event.target.value);
        this.setState({title: event.target.value})
    }

    render() {
        console.log("rendering Search");

        return (
            <div>
                <input className="" type="text" name="title" placeholder="Enter Something.." value={this.state.title}
                onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTitle: title => {
            dispatch(setTitle(title))
        }
    }
}


export default connect(null,mapDispatchToProps)(Search);