import React from 'react';
import {useSelector} from "react-redux";


const Themium = props => {

    const theme = useSelector(state => state.user.theme);
    const className = 'Themium';


    return (
        <div data-theme={theme} className={className}>
            {
                props.children
            }
        </div>
    );
};

export default Themium;

