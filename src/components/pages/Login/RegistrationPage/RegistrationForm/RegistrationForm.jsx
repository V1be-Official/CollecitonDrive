import React, {useState} from 'react';

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

import style from './RegistrationForm.scss';
import Repeat from "../../../../icons/Repeat";
import Email from "../../../../icons/Email";
import axios from "axios";
import {useDataManager} from "../../../../custom/DataManager/DataManager";
import {useHistory} from "react-router";
import Dimmer from "../../../../ui/Dimmer/Dimmer";
import {acLogin} from "../../../../../redux/actions/acUser";
import {useDispatch} from "react-redux";

const RegistrationForm = props => {

    const dispatch = useDispatch();

    const languageControl = useLanguage();

    const history = useHistory();

    const dataManager = useDataManager();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatingPassword, setRepeatingPassword] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);


    const onChangeUsername = (value) => {
        setUsername(value);
    };

    const onChangePassword = (value) => {
        setPassword(value);
    };

    const onChangeEmail = (value) => {
        setEmail(value);
    };

    const onChangeRepeatingPassword = (value) => {
        setRepeatingPassword(value);
    };

    const onStartPrint = () => {
        if(Object.keys(errors).length)
            setErrors({});
    };

    const onSubmit = async event => {


        if(password !== repeatingPassword && password.length > 0) {
            setErrors({
                repeatingPassword: "Пароли не совпадают"
            });
        }

        try {

            setLoading(true);

            await dataManager.register({
                username,
                password,
                email,
                lang: languageControl.locale
            });

            console.log("Зарегистрирован");

            const dataLogin = await dataManager.login({
                username,
                password
            });

            setLoading(false);

            setUsername('');
            setPassword('');
            setRepeatingPassword('');
            setEmail('');

            dispatch(acLogin(dataLogin.access));

            history.push('/');
        } catch (error) {

            console.log(error);

            setLoading(false);

            const newErrors = {...errors};

            for(let errorKey in error.data) {
                newErrors[errorKey] = error.data[errorKey][0];
            }

            setErrors(newErrors);
        }

    };



    return (
        <div className={style.container}>
            <div className={style.inputWrapper}>
                <User color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'text'}
                    onChange={onChangeUsername}
                    onStartPrint={onStartPrint}
                    value={username}
                    placeholder={languageControl.get(`${props.textaPath}.input.username`)}
                />
                {errors.username && <span className={style.error}>{errors.username}</span>}
            </div>

            <div className={style.inputWrapper}>
                <Email color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'text'}
                    onChange={onChangeEmail}
                    onStartPrint={onStartPrint}
                    value={email}
                    placeholder={languageControl.get(`${props.textaPath}.input.email`)}
                />
                {errors.email && <span className={style.error}>{errors.email}</span>}
            </div>

            <div className={style.inputWrapper}>
                <Key color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'password'}
                    onChange={onChangePassword}
                    onStartPrint={onStartPrint}
                    value={password}
                    placeholder={languageControl.get(`${props.textaPath}.input.password`)}
                />
                {errors.password && <span className={style.error}>{errors.password}</span>}
            </div>

            <div className={style.inputWrapper}>
                <Repeat color={getCSSVariable("--Light-dark")} />
                <Input
                    className={style.input}
                    type={'password'}
                    onChange={onChangeRepeatingPassword}
                    onStartPrint={onStartPrint}
                    value={repeatingPassword}
                    placeholder={languageControl.get(`${props.textaPath}.input.repeatingPassword`)}
                />
                {errors.repeatingPassword && <span className={style.error}>{errors.repeatingPassword}</span>}
            </div>

            <ButtonPrimary size={LARGE} onClick={onSubmit} className={style.btnSubmit}>
                <Texta path={`${props.textaPath}.submit`} />
            </ButtonPrimary>

            <Dimmer active={loading} />
        </div>
    );
};

RegistrationForm.propTypes = {
    textaPath: PropTypes.string.isRequired
};


export default RegistrationForm;
