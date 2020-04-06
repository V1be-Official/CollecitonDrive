import React, {useRef, useCallback} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import CollectionDrive from "../../icons/CollectionDrive";
import CollectionDriveText from "../../custom/CollectionDriveText/CollectionDriveText";
import Search from "../../ui/Search/Search";
import {useLanguage} from "../../../LanguageControl/LanguageControl";
import User from "../../icons/User";
import {getCSSVariable} from "../../../utils/getCSSVariable";
import Dropdown from "../../ui/Dropdown/Dropdown";

import style from './Navbar.scss';
import {useDispatch, useSelector} from "react-redux";
import {acLogout} from "../../../redux/actions/acUser";
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";

const textaPath = 'CD.page.navbar';

const Navbar = props => {

    const languageControl = useLanguage();

    const history = useHistory();

    const dropdownMethods = useRef();

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const logOut = useCallback(() => {
        dispatch(acLogout());
    }, []);

    const onLogOut = event => {

        dropdownMethods.current.close();
        logOut();
    };

    const onAccount = event => {

        dropdownMethods.current.close();
        history.push('/account/' + user.id);

    };

    return (
        <div className={style.container}>
            <Link to={'/'} className={style.logo}>
                <CollectionDrive />
                <CollectionDriveText/>
            </Link>

            <Search
                className={style.search}
                placeholder={languageControl.get(`${textaPath}.search.placeholder`)}
                withIcon={true}
            />

            <Dropdown
                dropdown={
                    <div className={style.dropdown}>
                        <button onClick={onAccount} className={style.dropdownButton}>Account</button>
                        <button className={style.dropdownButton}>Settings</button>
                        <button onClick={onLogOut} className={classNames(style.dropdownButton, style.logOut)}>Log out</button>
                    </div>
                }
                trigger={
                    <div className={style.user}>
                        <User color={getCSSVariable("--Light-light")} />
                    </div>
                }
                classNames={{
                    container: style.dropdownContainer
                }}
                methods={dropdownMethods}
            />
        </div>
    );

};

export default Navbar;
