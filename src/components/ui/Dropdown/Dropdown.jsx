import React, {useState, useEffect, useRef, useCallback} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import {isObject} from 'lodash';

import style from './Dropdown.scss';

const Dropdown = React.forwardRef((props, forwardedRef) => {

    const [opened, setOpened] = useState(props.handControl ? props.opened : false);
    const refContainer = useRef(forwardedRef);
    const methods = useRef({});

    const toggleOpenedAuto = (newOpened) => {
        if(typeof newOpened === "undefined")
            setOpened(prevOpened => !prevOpened);
        else
            setOpened(newOpened);
    };

    const toggleOpenedHand = (newOpened) => {

        if(typeof newOpened === "undefined")
            props.onToggle && props.onToggle(!props.opened);
        else
            props.onToggle && props.onToggle(newOpened);

    };

    const toggleOpened = (newOpened) => {
        props.handControl ? toggleOpenedHand(newOpened) : toggleOpenedAuto(newOpened);
    };

    const onTriggerClick = event => {
        toggleOpened();

        props.trigger.props.onClick && props.trigger.props.onClick(event);
    };

    const renderTrigger = () => {
        return (
            React.cloneElement(
                props.trigger,
                {
                    onClick: onTriggerClick,
                    className: classNames(style.trigger, props.trigger.props.className)
                }
            )
        );
    };

    const renderDropdown = () => {

        return (
            React.cloneElement(
                props.dropdown,
                {
                    "data-opened": props.handControl ? props.opened : opened,
                    className: classNames(style.dropdown, props.dropdown.props.className)
                }
            )
        );

    };

    const onDocumentClick = event => {
        const isContainer = (target) => refContainer.current.contains(target) || refContainer.current === target;

        const target = event.target;

        if(!isContainer(target) && props.closeAfterOutsideClick) {
            toggleOpened(false);
        }
    };

    useEffect(
        () => {
            window.addEventListener('mousedown', onDocumentClick);

            return () => {
                window.removeEventListener('mousedown', onDocumentClick);
            };
        },
        [onDocumentClick]
    );

    useEffect(() => {
        if("current" in props.methods) {
            methods.current.open = () => toggleOpened(true);
            methods.current.close = () => toggleOpened(false);
            methods.current.toggle = () => toggleOpened();
        }
    },
        [toggleOpened]
    );

    useEffect(() => {
            props.methods.current = methods.current;
            return () => {
                props.methods.current = {};
            };
        },
        [props.methods]
    );

    useEffect(() => {
        setOpened(props.opened);
    },
        [props.handControl]
    );

    return (
        <div
            className={classNames(style.container, props.classNames.container)}
            ref={refContainer}
        >
            {renderTrigger()}
            {renderDropdown()}
        </div>
    );

});

/*
    * @param {Object} methods - The employee who is responsible for the project.
    * @param {function} methods.current.close - Open dropdown.
    * @param {function} methods.current.open - Close dropdown.
    * @param {function} methods.current.toggle - Toggle dropdown.
 */

Dropdown.propTypes = {
    trigger: PropTypes.node.isRequired,
    dropdown: PropTypes.node.isRequired,
    methods: PropTypes.shape({
        current: PropTypes.object
    }),
    classNames: PropTypes.shape({
        container: PropTypes.string
    }),
    closeAfterOutsideClick: PropTypes.bool,
    handControl: PropTypes.bool,
    opened: PropTypes.bool,
    onToggle: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
};

Dropdown.defaultProps = {
    classNames: {},
    closeAfterOutsideClick: true,
    opened: false,
    handControl: false,
    methods: {}
};

export default Dropdown;
