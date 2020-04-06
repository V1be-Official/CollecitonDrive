import React from 'react';

import style from './LoginNavbar.scss';
import CollectionDriveText from "../../../custom/CollectionDriveText/CollectionDriveText";
import Crescent from "../../../icons/Crescent";
import {useDispatch, useSelector} from "react-redux";
import {acChangeTheme} from "../../../../redux/actions/acUser";
import OrdinaryDropdown from "../../../Dropdowns/OrdinaryDropdown/OrdinaryDropdown";
import LanguageDropdown from "../../../custom/LanguageDropdown/LanguageDropdown";
import {getCSSVariable} from "../../../../utils/getCSSVariable";

const LoginNavbar = props => {

    const dispatch = useDispatch();



    const onChangeTheme = event => {
        dispatch(acChangeTheme());
    };

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <CollectionDriveText/>
            </div>
            <div className={style.rightSide}>
                <button onClick={onChangeTheme} className={style.btnChangeTheme}>
                    <Crescent color={getCSSVariable("--Light-dark")} />
                </button>
                <LanguageDropdown/>
            </div>
        </div>
    );
};

export default LoginNavbar;
