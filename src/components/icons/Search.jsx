import React from 'react';

import PropTypes from 'prop-types';

import {SVG} from "../HOCs/SVG";
import {getCSSVariable} from "../../utils/getCSSVariable";


const Search = props => {

    return (
        <path
            d="M19.2893 15.7606L15.9975 12.4688C16.596 11.2718 16.995 9.87531 16.995 8.4788C16.995 3.79052 13.2045 0 8.51622 0C3.82794 0 0.0374146 3.79052 0.0374146 8.4788C0.0374146 13.1671 3.82794 16.9576 8.51622 16.9576C9.91273 16.9576 11.3092 16.5586 12.5062 15.9601L15.798 19.2519C16.7955 20.2494 18.2918 20.2494 19.2893 19.2519C20.187 18.2544 20.187 16.7581 19.2893 15.7606ZM8.51622 14.9626C4.92519 14.9626 2.03243 12.0698 2.03243 8.4788C2.03243 4.88778 4.92519 1.99501 8.51622 1.99501C12.1072 1.99501 15 4.88778 15 8.4788C15 12.0698 12.1072 14.9626 8.51622 14.9626Z"
            fill={getCSSVariable("--Light-dark")}
        />
    );
};

Search.propTypes = {
    color: PropTypes.string.isRequired
};

export default (
    SVG(
        {
            viewBox: '0 0 20 20'
        }
    )(Search)
)
