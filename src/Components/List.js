import React from "react";
import { connect } from 'react-redux';

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("rendering List", this.props);
        let names = [];
        let filteredNames = this.props.namesData.filter((item) => {
            return (item.toLowerCase().indexOf(this.props.title.toLowerCase()) ==0); //
        })

        filteredNames.map((item, index) => {      // like foreach
            names.push(<div className="mystyle" key={index}>{item}</div>); //
        })
        return (
            <div>
                {names}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        namesData: state.Names,
        title: state.Title
    }
}



export default connect(mapStateToProps)(List);