import React from 'react';
import {Tabs} from '../Tabs/Tabs';
import {PlatformFilter} from '../PlatformFilter/PlatformFilter';
import {RatingFilter} from '../RatingFilter/RatingFilter';

export class AppHeader extends React.Component {
    render() {
        return (
            <div className="app-header app__header">
                <Tabs apps={this.props.apps} />
                <div className="app-header__content">
                    <PlatformFilter />
                    <RatingFilter />
                </div>
            </div>
        );
    }
}