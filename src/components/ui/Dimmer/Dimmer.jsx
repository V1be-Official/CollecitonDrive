import React from 'react';

import PropTypes from 'prop-types';

import style from './Dimmer.scss';
import Loader from "../Loader/Loader";

Dimmer.propTypes = {
    active: PropTypes.bool
};

Dimmer.defaultProps = {
    active: false
};

function Dimmer(props) {
    return (
        props.active && (
            <div className={style.dimmer}>
                <Loader />
            </div>
        )
    );
}

export default Dimmer;
