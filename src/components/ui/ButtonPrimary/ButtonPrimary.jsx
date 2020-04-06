import React from 'react';

import classNames from 'classnames';

import Button, {LARGE, MEDIUM, SMALL} from "../Button/Button";

import style from './ButtonPrimary.scss';
import PropTypes from "prop-types";


const ButtonPrimary = props => {

    return (
        <Button
            {...props}
            className={classNames(style.button, props.className)}
        >
            {props.children}
        </Button>
    );

};

ButtonPrimary.propTypes = {
    size: PropTypes.oneOf([SMALL, MEDIUM, LARGE]),
    className: PropTypes.string
};

export default ButtonPrimary;
