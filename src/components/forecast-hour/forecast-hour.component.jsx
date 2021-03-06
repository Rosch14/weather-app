import React from 'react';
import PropTypes from 'prop-types';
import SmallLabel from '../small-label.styles.jsx';
import Text from '../text.styles.jsx';
import {
    ForecastWrapper,
    WeatherIcon
} from './forecast-hour.styles';

const ForecastHour = props => {
    const { temp, month, day, hour, icon } = props;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    return (
        <ForecastWrapper>
            <Text align="center">
                {month}.{day}
            </Text>
            <Text align="center">{hour}:00</Text>
            <WeatherIcon src={iconUrl}  />
            <SmallLabel align="center" weight="400">
                {temp}&#176;
            </SmallLabel>
        </ForecastWrapper>
    );
};

ForecastHour.propTypes = {
    temp: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ForecastHour;