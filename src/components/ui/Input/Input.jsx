import React, {useCallback, useRef} from 'react';

import classNames from 'classnames';

import PropTypes from 'prop-types';
import {omit} from "lodash";

import style from './Input.scss';

const Input = props => {
    const timerAfterEndPrint = useRef(null);

    const stopTimerAfterEndPrint = useCallback(() => {
        if(timerAfterEndPrint.current) {
            clearTimeout(timerAfterEndPrint.current);
            timerAfterEndPrint.current = null;
        }
    }, []);

    const onEndPrint = useCallback((...args) => {
        stopTimerAfterEndPrint();
        props.onEndPrint && props.onEndPrint(...args);
    }, [props.onEndPrint]);

    const onChange = useCallback(event => {
        const newValue = event.currentTarget.value;

        if(timerAfterEndPrint.current) {
            stopTimerAfterEndPrint();
        } else {
            props.onStartPrint && props.onStartPrint(newValue, event);
        }
        timerAfterEndPrint.current = setTimeout(() => onEndPrint(newValue, event), props.timeEndPrint);

        props.onChange && props.onChange(newValue, event);
    }, [props.value, props.onChange, props.timeEndPrint, onEndPrint, onEndPrint]);

    const onBlur = useCallback(event => {
        props.onBlur && props.onBlur(props.value, event);
    }, [props.value, props.onBlur]);

    const onFocus = useCallback(event => {
        props.onFocus && props.onFocus(props.value, event);
    }, [props.value, props.onFocus]);

    return (
        <input
            {...omit(props, ['timeEndPrint', 'onStartPrint', 'onEndPrint'])}
            onChange={onChange}
            value={props.value}
            onBlur={onBlur}
            onFocus={onFocus}
            className={classNames(style.input, props.className)}
        />
    );

};

Input.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onEndPrint: PropTypes.func,
    onStartPrint: PropTypes.func,
    timeEndPrint: PropTypes.number,
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "password"])
};

Input.defaultProps = {
    timeEndPrint: 200,
    value: ''
};

export default Input;
