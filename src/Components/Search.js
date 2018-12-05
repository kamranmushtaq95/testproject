import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    handleChange (event) {
        this.setState({title: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" name="title" placeholder="Enter Something.." value={this.state.title}
                onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

export default Search;