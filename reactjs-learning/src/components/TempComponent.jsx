import React, { Component } from 'react';

class TempComponent extends Component {
    render() {
        const listItem = ["King", "Bring", "Ding"];
        const listItemElement = listItem.map((item, index) => {
            <h1 key={index}>{item}</h1>
        });
        return (
            <div>
                {listItemElement}
            </div>
        )
    }
}

export default TempComponent;
