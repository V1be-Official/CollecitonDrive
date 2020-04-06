import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './Loader.scss';

function Loader(props) {
    return (
        <div className={style.loader}>
            <div className={classNames(props.ballClassName, style.ball)} />
            <div className={classNames(props.ballClassName, style.ball)} />
            <div className={classNames(props.ballClassName, style.ball)} />
        </div>
    );
}

Loader.propTypes = {

    ballClassName: PropTypes.string

};

export default Loader;
