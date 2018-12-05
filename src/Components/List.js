import React from "react";

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        let names = [];
        let filteredNames = this.props.namesData.filter((item) => {
            return (item.toLowerCase().indexOf(this.props.title.toLowerCase()) == 0);
        })
        filteredNames.map((item, index) => {
            names.push(<div key={index}>{item}</div>);
        })
        return (
            <div>
                {names}
            </div>
        );
    }
}

export default List;