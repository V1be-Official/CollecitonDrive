import React, {useRef, useState, useLayoutEffect} from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';

import Navbar from "../Navbar/Navbar";

import style from './Homepage.scss';
import Modal from "../../ui/Modal/Modal";
import {useDataManager} from "../../custom/DataManager/DataManager";


const Homepage = props => {

    const [data, setData] = useState({});

    const dataManager = useDataManager();



    // useLayoutEffect(() => {
    //
    //     async function loadData() {
    //
    //         const response = dataManager.getUserData({})
    //
    //     }
    //
    //     loadData();
    //
    // }, []);


    return (
        <div
            className={style.container}
        >
            <Navbar textaPath={`${props.textaPath}.navbar`} />
        </div>
    );
};

Homepage.propTypes = {

    textaPath: PropTypes.string

};

export default Homepage;
