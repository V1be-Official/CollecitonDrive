import React from 'react';

import PropTypes from "prop-types";

import BackgroundPath from "./BackgroundRegistrationPage.jpg";

import RegistrationModal from "./RegistrationModal/RegistrationModal";

import style from './RegistrationPage.scss';


const RegistrationPage = props => {



    return (
        <div
            className={style.container}
        >
            <RegistrationModal textaPath={`${props.textaPath}.modal`} />
            <div
                className={style.background}
                style={{
                    backgroundImage: `url(${BackgroundPath})`
                }}
            />
        </div>
    );
};

RegistrationPage.propTypes = {
    textaPath: PropTypes.string.isRequired
};

export default RegistrationPage;
