import React from 'react';
import { connect } from 'react-redux';
import List from './Components/List';
import SearchBar from './Components/Search';
import Api from "./Api/Api";

import { addNames } from "./Redux/Actions";

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            dataState: 'loading'
        }
    }

    componentWillMount() {
        Api.getNames().then((response) => {
            if(response.data) {
                this.setState({dataState: 'loaded'});
                this.props.onSetNames(response.data);
            }
            })
            .catch((error) => {
                console.log(error);
                this.setState({dataState: 'failed'})
            });
    }

    render() {
        console.log("rendering App");

        let dataComponent = <div>Loading Data...</div>;
        if(this.state.dataState == 'loaded') {
            dataComponent = <List namesData={[]} title=""/>
        } else if (this.state.dataState == 'failed') {
            dataComponent = <div>Failed to load data, Check internet and refresh...</div>
        }
        return (
            <div className="container">
                <SearchBar/>
                {dataComponent}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetNames: names => {
            dispatch(addNames(names))
        }
    }
}


// let x = {
//     a: 1,
//     b: function() {},
//     c: () => {},
//     d: function(arg) {
//         return arg+1;
//         },
//     e: arg => arg+1,
//     e: arg => {return arg+1}
//     }



export default connect(null, mapDispatchToProps)(App);