import React from 'react';
import List from './Components/List';
import SearchBar from './Components/Search';
import Api from "./Api/Api";

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            dataState: 'loading'
        }
    }

    componentWillMount() {
        Api.getNames().then((response) => {
            if(response.data)
                this.setState({dataState: 'loaded'})
            })
            .catch((error) => {
                console.log(error);
                this.setState({dataState: 'failed'})
            });
    }

    render() {
        let dataComponent = <div>Loading Data...</div>;
        if(this.state.dataState == 'loaded') {
            dataComponent = <List namesData={[]} title=""/>
        } else if (this.state.dataState == 'failed') {
            dataComponent = <div>Failed to load data, Check internet and refresh...</div>
        }
        return (
            <React.Fragment>
                <SearchBar/>
                {dataComponent}
            </React.Fragment>
        );
    }
}

export default App;