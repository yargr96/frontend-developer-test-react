import React from 'react';

export class PlatformFilter extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="filter__header">Фильтр</div>
                <div className="filter__content">
                    <div className="filter__item filter__item_active">Все</div>
                    <div className="filter__divider"></div>
                    <div className="filter__item"></div>
                    <div className="filter__divider"></div>
                    <div className="filter__item"></div>
                </div>
            </div>
        );
    }
};