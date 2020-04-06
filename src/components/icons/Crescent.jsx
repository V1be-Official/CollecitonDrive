import React from 'react';

import PropTypes from 'prop-types';

import {SVG} from "../HOCs/SVG";


const Crescent = props => {

    return (
        <path
            d="M21.0734 39.9988C28.7257 40.0794 35.7158 35.6699 38.9392 28.7293C36.9106 29.6144 34.7136 30.0479 32.5008 29.9998C23.827 29.99 16.7979 22.9609 16.7881 14.2871C16.8749 8.41991 20.1123 3.05319 25.2614 0.239221C23.8727 0.0624114 22.4732 -0.016752 21.0734 0.00277729C10.0285 0.00277729 1.07538 8.95627 1.07538 20.0008C1.07538 31.0457 10.0285 39.9988 21.0734 39.9988Z"
            fill={props.color}
        />
    );
};

Crescent.propTypes = {
    color: PropTypes.string.isRequired
};

export default (
    SVG(
        {
            viewBox: '0 0 40 40'
        }
    )(Crescent)
)
