import data from '../DATA/data.json'
import React, { Component } from 'react';

export default class CategoryColumns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: data
        }
    }

    GetItems = (event) => {
        let group = event.target.attributes["data-group"].value;
        let list = data.filter((x) => x.group == group);
        this.setState({items: list});
    }

    render() {

      return (
        <div>
            <div className="buttons">
                {
                    data.reduce((init, val) => {
                        if(!init.includes(val.group))
                            init.push(val.group);
                        return init;
                    }, []).map(group => <button onClick={this.GetItems} key={group} data-group={group}>{group}</button>)
                }
            </div>
            <div className="items">
                <ul>
                    {
                        this.state.items.map(i => <li key={i.id}>{i.name}</li>)
                    }
                </ul>
            </div>
        </div>
      );
    }
}


