import React, {useRef, useState} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Dropdown from "../../ui/Dropdown/Dropdown";

import Button from "../../ui/Button/Button";

import style from './OrdinaryDropdown.scss';


const OrdinaryDropdown = props => {

    const dropdownMethods = useRef({});

    const getTrigger = () => {
        return (
            <Button className={classNames(style.trigger, props.classNames.trigger)}>
                {props.chosen}
            </Button>
        );
    };

    const onChooseVariant = (variant) => {
        dropdownMethods.current.close();
        props.onChooseVariant && props.onChooseVariant(variant);
    };

    const getDropdown = () => {

        return (
            <div className={classNames(style.dropdown, props.classNames.dropdown)}>
                {
                    props.variants.map((variant, index) => (
                        <button
                            key={index}
                            className={classNames(style.variant, props.classNames.variant)}
                            onClick={() => onChooseVariant(variant.data)}
                        >
                            {variant.value}
                        </button>
                    ))
                }
            </div>
        );
    };

    return (

        <Dropdown
            dropdown={getDropdown()}
            trigger={getTrigger()}
            methods={dropdownMethods}
            classNames={{
                container: classNames(style.container, props.classNames.container)
            }}
        />

    );

};

OrdinaryDropdown.propTypes = {
    variants: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.node,
        data: PropTypes.any
    })).isRequired,
    chosen: PropTypes.node.isRequired,
    onChooseVariant: PropTypes.func.isRequired,
    classNames: PropTypes.shape({
        container: PropTypes.string,
        dropdown: PropTypes.string,
        trigger: PropTypes.string,
        variant: PropTypes.string
    })
};

OrdinaryDropdown.defaultProps = {
    classNames: {}
};


export default OrdinaryDropdown;
