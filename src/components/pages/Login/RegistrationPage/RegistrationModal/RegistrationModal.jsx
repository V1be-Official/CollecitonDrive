import React from 'react';

import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

import Navbar from "../../LoginNavbar/LoginNavbar";
import Texta from "../../../../../LanguageControl/Texta";

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import style from './RegistrationModal.scss';


const RegistrationModal = props => {



    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.formWrapper}>
                <span className={style.header}>
                <Texta path={`${props.textaPath}.header`}/>
            </span>
                <RegistrationForm textaPath={`${props.textaPath}.form`}/>
                <span className={style.logIn}>
                <Texta path={`${props.textaPath}.logIn.text`}/>
                <Link to={"/login"} className={style.logInLink}>
                    <Texta path={`${props.textaPath}.logIn.link`}/>
                </Link>
            </span>
            </div>
        </div>
    );
};

RegistrationModal.propTypes = {
    textaPath: PropTypes.string.isRequired
};

export default RegistrationModal;
