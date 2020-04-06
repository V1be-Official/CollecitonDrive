import React from 'react';

import PropTypes from 'prop-types';

import Navbar from "../../LoginNavbar/LoginNavbar";
import CollectionDrive from "../../../../icons/CollectionDrive";
import LoginForm from "../LoginForm/LoginForm";
import Texta from "../../../../../LanguageControl/Texta";

import style from './LoginModal.scss';
import {Link} from "react-router-dom";

const LoginModal = props => {

    return (
        <div className={style.container}>
            <Navbar />
            <CollectionDrive className={style.logo} />
            <span className={style.header}>
                <Texta path={`${props.textaPath}.header`} />
            </span>
            <LoginForm textaPath={`${props.textaPath}.form`} />
            <span className={style.signUp}>
                <Texta path={`${props.textaPath}.signUp.text`} />
                <Link to={"/registration"} className={style.signUpLink}>
                    <Texta path={`${props.textaPath}.signUp.link`} />
                </Link>
            </span>
        </div>
    );
};

LoginModal.propTypes = {
    textaPath: PropTypes.string.isRequired
};

export default LoginModal;
