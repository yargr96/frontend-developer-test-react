import React from 'react';

export class Tabs extends React.Component {
    handleClick = id => {
        console.log(id);
    }

    render() {
        const tabs = [];
        const apps = this.props.apps;

        for (let key in apps) {
            tabs.push(
                <div 
                    className="tabs__item" 
                    key={key}
                    onClick={() => this.handleClick(key)}
                >
                    {apps[key].name}
                </div>
            )
        }

        return (
            <div className="tabs">
                {tabs}
                <div className="tabs__item tabs__item_filler"></div>
            </div>
        );
    }
}