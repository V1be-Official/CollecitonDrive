import React, {useRef, useState} from 'react';

import PropTypes from 'prop-types';

import style from './GroupInputs.scss';
import Input from "../../../../ui/Input/Input";
import {useSelector} from "react-redux";

GroupInputs.propTypes = {
    count: PropTypes.number,
    methods: PropTypes.shape({
        current: PropTypes.node
    })
};

function GroupInputs(props) {


    const [values, setValues] = useState([]);

    const onChange = event => {
        const newValues = [...values];

        const index = event.target.dataset.input;

        newValues[index] = event.target.value;

        setValues(newValues);
    };

    const generateInputs = () => {

        const inputs = [];

        for(let index = 0; index < props.count; index++) {

            inputs.push(<input data-input={index} onChange={onChange} />);

        }


        return inputs;
        
    };

    return (
        <div className={style.container}>

        </div>
    );
}

export default GroupInputs;
