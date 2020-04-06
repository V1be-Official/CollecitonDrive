import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Close from "../../icons/Close";
import {getCSSVariable} from "../../../utils/getCSSVariable";

import style from './CloseButton.scss';

const CloseButton = props => {


    return (
        <button {...props} className={classNames(style.button, props.className)}>
            <Close color={getCSSVariable('--Light-dark')} />
        </button>
    );
};


CloseButton.propTypes = {
    className: PropTypes.string
};

export default CloseButton;
