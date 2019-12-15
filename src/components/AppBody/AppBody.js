import React from 'react';
import { Application } from '../Application/Application';
import { App } from '../App/App';

export class AppBody extends React.Component {
    render() {
        const apps =[];

        for (let i = 0; i < 5; i++) {
            apps.push(<Application key={i} />);
        }

        return (
            <div className="app-body">
                {apps}
            </div>
        );
    }
};