import React from "react";

import Api from './Api';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            data: [],
            title: ''
        }

        setInterval(() => {
            this.toggleState();
        }, 30000
        );

            Api.getName().then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }


   /* componentDidMount() {

    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }
    */


    toggleState() {


        let newState = {
            toggle: !this.state.toggle
        };
        this.setState(newState);
    }

    handleChange (event) {
        this.props.prop2();
        this.setState({title: event.target.value})
    }

    render() {
        console.log("mycomponent render function", this.props.prop1);
        let names = [];
        let filteredNames = this.state.data.filter((item) => {
            return (item.toLowerCase().indexOf(this.state.title.toLowerCase()) == 0);
        })
        console.log("FILTERED", filteredNames, this.state.title);
        filteredNames.map((item, index) => {
            names.push(<div key={index}>{item}</div>);
        })
        return (
            <div>
                <input type="text" name="title" placeholder="Enter Something.." value={this.state.title}
                onChange={this.handleChange.bind(this)}/>
                {/*<div>I am {this.state.toggle.toString()}</div>*/}
                {names}
            </div>
        );
    }
}

export default MyComponent;