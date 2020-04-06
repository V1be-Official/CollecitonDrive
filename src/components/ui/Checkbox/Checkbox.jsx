import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './Checkbox.scss';
import Check from "../../icons/Check";

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';

const Checkbox = props => {

    const onClick = () => {
        event.preventDefault();
        props.onChange && props.onChange(!props.checked);
    };

    const stylesBySize = useMemo(() => {

        const measure = 'px';
        const shellSmallSize = '12' + measure;
        const shellMediumSize = '16' + measure;
        const shellLargeSize = '20' + measure;

        const iconSmallSize = '8' + measure;
        const iconMediumSize = '10' + measure;
        const iconLargeSize = '14' + measure;

        switch (props.size) {
            case SMALL:
                return {
                    shell: {
                        height: shellSmallSize,
                        width: shellSmallSize,
                    },
                    icon: {
                        height: iconSmallSize,
                        width: iconSmallSize,
                    }
                };
            case MEDIUM:
                return {
                    shell: {
                        height: shellMediumSize,
                        width: shellMediumSize,
                    },
                    icon: {
                        height: iconMediumSize,
                        width: iconMediumSize,
                    }
                };
            case LARGE:
                return {
                    shell: {
                        height: shellLargeSize,
                        width: shellLargeSize,
                    },
                    icon: {
                        height: iconLargeSize,
                        width: iconLargeSize,
                    }
                };
            default:
                console.error('Size is bad');
        }
    }, [props.size]);

    return (
        <div
            onClick={onClick}
            className={classNames(style.shell, props.classNames.shell)}
            style={{
                ...stylesBySize.shell,
                ...props.style
            }}
        >
            {props.checked && (
                <Check
                    color={props.iconColor}
                    className={props.classNames.icon}
                    {...stylesBySize.icon}
                />
            )}
        </div>
    );

};

Checkbox.propTypes = {
    size: PropTypes.oneOf([SMALL, MEDIUM, LARGE]),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    classNames: PropTypes.shape({
        shell: PropTypes.string,
        icon: PropTypes.string
    }),
    style: PropTypes.object,
    iconColor: PropTypes.string
};

Checkbox.defaultProps = {
    checked: false,
    size: MEDIUM,
    classNames: {},
    iconColor: "#465FE3"
};

export default Checkbox;

