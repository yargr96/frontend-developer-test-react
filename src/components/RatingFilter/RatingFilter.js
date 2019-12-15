import React from 'react';

export class RatingFilter extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="filter__header">Рейтинг</div>
                <div className="filter__content">
                    <div className="app-select">
                        <div className="app-select__container">
                            <div className="app-select__main">Выбрать</div>
                            <div className="app-select__options">
                                <div className="app-select__item">От 4,0</div>
                                <div className="app-select__item">От 4,0</div>
                                <div className="app-select__item">От 4,0</div>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        );
    }
}