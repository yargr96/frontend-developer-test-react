import React from 'react';
import getApps from '../../api/getApps';
import {AppHeader} from '../AppHeader/AppHeader';
import {AppBody} from '../AppBody/AppBody';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: {}
        };
    }

    componentDidMount() {
        getApps()
            .then(res => this.setState({apps: res}));
    }

    render() {
        return (
            <div className="app">
                <AppHeader apps={this.state.apps} />
                <AppBody />
            </div>
        );
    }
}