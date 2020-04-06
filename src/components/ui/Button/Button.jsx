import React from 'react';

import PropTypes from 'prop-types';

import {omit} from "lodash";

import classNames from 'classnames';

import style from './Button.scss';

export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';

const Button = props => {
    return (
        <button
            {...omit(props, ['size'])}
            className={classNames(style.button, props.className, style[props.size])}
        >
            {props.children}
        </button>
    );

};

Button.propTypes = {
    size: PropTypes.oneOf([SMALL, MEDIUM, LARGE]),
    className: PropTypes.string
};

Button.defaultProps = {
    size: MEDIUM
};


export default Button;
