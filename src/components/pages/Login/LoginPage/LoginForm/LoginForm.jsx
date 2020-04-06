import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import Input from "../../../../ui/Input/Input";
import ButtonPrimary from "../../../../ui/ButtonPrimary/ButtonPrimary";
import Texta from "../../../../../LanguageControl/Texta";

import User from "../../../../icons/User";
import {getCSSVariable} from "../../../../../utils/getCSSVariable";
import Key from "../../../../icons/Key";
import {useLanguage} from "../../../../../LanguageControl/LanguageControl";
import {LARGE} from "../../../../ui/Button/Button";
import Checkbox from "../../../../ui/Checkbox/Checkbox";

import style from './LoginForm.scss';
import {useDispatch} from "react-redux";
import {acLogin} from "../../../../../redux/actions/acUser";
import {useDataManager} from "../../../../custom/DataManager/DataManager";
import Loader from "../../../../ui/Loader/Loader";

import jwt from 'jwt-decode';
import Dimmer from "../../../../ui/Dimmer/Dimmer";

const LoginForm = props => {

    const [loading, setLoading] = useState(false);

    const languageControl = useLanguage();

    const dataManager = useDataManager();

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [needRemember, setNeedRemember] = useState(false);

    const onChangeUsername = (value) => {
        setUsername(value);
    };

    const onChangePassword = (value) => {
        setPassword(value);
    };

    const onSubmit = async () => {

        if(loading) return;

        try {
            setLoading(true);

            const data = await dataManager.login({
                username, password
            });

            setLoading(false);

            setUsername('');
            setPassword('');

            dispatch(acLogin(data.access));
        } catch (error) {
            console.log(error);
        }

    };

    const onRememberChange = value => {
        setNeedRemember(value);
    };

    const onKeyPress = event => {

        if(event.keyCode === 13)
            onSubmit();

    };

    useEffect(() => {

        window.addEventListener('keypress', onKeyPress);

        return () => {
            window.removeEventListener('keypress', onKeyPress);
        }

    }, [onKeyPress]);

    return (
        <div className={style.container}>
            <div className={style.inputWrapper}>
                <User color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'text'}
                    onChange={onChangeUsername}
                    value={username}
                    placeholder={languageControl.get(`${props.textaPath}.input.username`)}
                />
            </div>
            <div className={style.inputWrapper}>
                <Key color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'password'}
                    onChange={onChangePassword}
                    value={password}
                    placeholder={languageControl.get(`${props.textaPath}.input.password`)}
                />
            </div>

            <label className={style.remember}>
                <Checkbox onChange={onRememberChange} checked={needRemember} />
                <span>
                    <Texta path={`${props.textaPath}.checkbox`}/>
                </span>
            </label>

            <ButtonPrimary size={LARGE} onClick={onSubmit} className={style.btnSubmit}>
                <Texta path={`${props.textaPath}.submit`} />
            </ButtonPrimary>

            <Dimmer active={loading} />
        </div>
    );
};

LoginForm.propTypes = {
    textaPath: PropTypes.string.isRequired
};


export default LoginForm;
