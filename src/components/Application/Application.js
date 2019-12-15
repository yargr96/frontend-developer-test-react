import React from 'react';

export class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <div className="application__main">
                    <div className="application__icon"></div>
                    <div className="application__info">
                        <div className="application__title">Тинькофф – Онлайн банк. Банк № 1 в России</div>
                        <div className="application-properties">
                            <div className="application-properties__item application-properties__item_platform">
                                <div className="application-properties__icon"></div>
                                <div className="application-properties__value">free</div>
                            </div>
                            <div className="application-properties__item application-properties__item_rating">
                                <div className="application-properties__icon"></div>
                                <div className="application-properties__value">4,8</div>
                            </div>
                            <div className="application-properties__item application-properties__item_location">
                                <div className="application-properties__icon"></div>
                                <div className="application-properties__value">RU</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="application-ratings">
                    <div className="application-ratings__item">
                        <div className="application-ratings__title">ASO index</div>
                        <div className="application-ratings__value">7,8</div>
                    </div>
                    <div className="application-ratings__item">
                        <div className="application-ratings__title">Установок за месяц</div>
                        <div className="application-ratings__value">135K.</div>
                    </div>
                    <div className="application-ratings__item">
                        <div className="application-ratings__title">В категории</div>
                        <div className="application-ratings__value">3</div>
                    </div>
                </div>
            </div>
        );
    }
};