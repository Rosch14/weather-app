import React from 'react';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    NotFoundWrapper,
    NotFoundIcon,
    NotFoundText
} from './not-found.styles';


const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundIcon>
                <FontAwesomeIcon icon={faBroom} />
            </NotFoundIcon>
            <NotFoundText>Sorry, the city was not found ...</NotFoundText>
        </NotFoundWrapper>
    );
};

export default NotFound;