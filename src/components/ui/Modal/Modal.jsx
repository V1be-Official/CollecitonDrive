import React from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import CloseButton from "../CloseButton/CloseButton";

import style from './Modal.scss';

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    className: PropTypes.string
};

function Modal(props) {

    const onCloseButtonClick = event => {

        props.onClose && props.onClose();

    };

    const createModal = () => {

        return (
                props.isOpen ? (
                    <div className={style.dimmer}>
                        <div className={classNames(style.modalContainer, props.className)}>
                            <CloseButton className={classNames(style.closeButton)} onClick={onCloseButtonClick} />
                            {props.children}
                        </div>
                    </div>
                ) : null
        );

    };

    return ReactDOM.createPortal(createModal(), document.body);
}

export default Modal;
