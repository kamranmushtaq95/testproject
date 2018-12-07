import React from "react";
import { connect } from 'react-redux';

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("rendering List");
        let names = [];
        let filteredNames = this.props.namesData.filter((item) => {
            return (item.toLowerCase().indexOf(this.props.title.toLowerCase()) ==0); //  > -1 if we want to check from everywhere
        })


        let message = "";
        if(this.props.title.length > 0)
            message = filteredNames.length + " matches found."; // for counting filtered data

        filteredNames.map((item, index) => {      // like foreach
            names.push(<div className="mystyle" key={index}>{item}</div>);
        })
        return (
            <React.Fragment>
                {message}
                {names}

                {/*<div>*/}
                    {/*<p> hello world</p>*/}
                    {/*<table className="table">*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Sno</th>*/}
                            {/*<th>Animal names</th>*/}
                        {/*</tr>*/}
                        {/*names.push(<tr><td>{index}</td><td>{item}</td></tr>)*/}
                
                        {/*</thead>*/}
                        {/*<tbody>*/}

                        {/*</tbody>*/}
                    {/*</table>*/}

                {/*</div>*/}

            </React.Fragment>
                                //common patter to return multiple values.
        );
    }
}


// names.push(<tr><td>{index}</td><td>{item}</td></tr>)


const mapStateToProps = state => {
    return {   // returning an object
        namesData: state.Names,
        title: state.Title
    }
}


export default connect(mapStateToProps)(List);