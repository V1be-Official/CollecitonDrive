import React, {useEffect} from 'react';

import PropTypes from 'prop-types';

import BackgroundPath from './LoginPageBackground.jpg';

import LoginModal from "./LoginModal/LoginModal";

import style from './LoginPage.scss';

const LoginPage = props => {

    return (
        <div
            className={style.container}
        >
            <LoginModal textaPath={`${props.textaPath}.modal`} />
            <div
                className={style.background}
                style={{
                    backgroundImage: `url(${BackgroundPath})`
                }}
            />
        </div>
    );
};

LoginPage.propTypes = {
    textaPath: PropTypes.string.isRequired
};

export default LoginPage;
