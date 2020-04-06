import React from 'react';

import PropTypes from 'prop-types';

import {SVG} from "../HOCs/SVG";


const CollectionDrive = props => {

    return (
        <>
            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M188 8L90.5 53L8 188L141.75 104.25L188 8ZM115.143 97.9998C126.977 97.9998 136.571 88.4059 136.571 76.5713C136.571 64.7366 126.977 55.1427 115.143 55.1427C103.308 55.1427 93.7142 64.7366 93.7142 76.5713C93.7142 88.4059 103.308 97.9998 115.143 97.9998Z" fill="url(#paint0_linear)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M180 0L82.5 45L0 180L133.75 96.25L180 0ZM107.143 89.9998C118.977 89.9998 128.571 80.4059 128.571 68.5713C128.571 56.7366 118.977 47.1427 107.143 47.1427C95.3081 47.1427 85.7142 56.7366 85.7142 68.5713C85.7142 80.4059 95.3081 89.9998 107.143 89.9998Z" fill="url(#paint1_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="98" y1="8" x2="98" y2="188" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4561FA"/>
                    <stop offset="1" stopColor="#470E74"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="90" y1="0" x2="90" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4561FA"/>
                    <stop offset="1" stopColor="#470E74"/>
                </linearGradient>
            </defs>
        </>
    );
};

CollectionDrive.propTypes = {};

export default (
    SVG(
        {
            viewBox: '0 0 188 188'
        }
    )(CollectionDrive)
)
