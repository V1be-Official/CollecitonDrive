import React, {useState} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Input from "../Input/Input";
import SearchIcon from "../../icons/Search";

import {getCSSVariable} from "../../../utils/getCSSVariable";

import style from './Search.scss';

Search.propTypes = {

    placeholder: PropTypes.string,
    className: PropTypes.string,
    onSearch: PropTypes.func,
    withIcon: PropTypes.bool,
    icon: PropTypes.node
};

Search.defaultProps = {
  withIcon: false,
  icon: <SearchIcon color={getCSSVariable('--Light-dark')} />
};

function Search(props) {

    const [value, setValue] = useState('');

    const onSearch = value => {
        setValue(value);
    };

    return (
        <div className={classNames(style.container, props.className)}>
            <Input
                className={style.input}
                onChange={onSearch}
                value={value}
                placeholder={props.placeholder}
            />
            {props.withIcon && props.icon}
        </div>
    );
}

export default Search;
