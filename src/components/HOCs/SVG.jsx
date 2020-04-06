import React from 'react';

import PropTypes from 'prop-types';

import {omit} from "lodash";

const SVG = (
    (
        {viewBox = '0 0 1024 1024'}
    ) => (
        Icon => {

            const InnerIcon = (props) => (
                <svg
                    viewBox={viewBox}
                    width={props.width}
                    height={props.height}
                    xmlns="http://www.w3.org/2000/svg"
                    className={props.className}
                >
                    <Icon {...omit(props, ['className', 'width', 'height'])} />
                </svg>
            );

            InnerIcon.propTypes = {
                className: PropTypes.string,
                width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            };
            InnerIcon.defaultProps = {
                width: 20,
                height: 20
            };

            return InnerIcon;
        }
    )
);

export {SVG};
