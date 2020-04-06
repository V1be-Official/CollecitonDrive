import {UPDATE_USER} from "../reducers/rdUser";
import jwt from "jwt-decode";

export const acChangeLanguage = (language = 'en') => (dispatch) => {

    if(typeof language !== 'string')
        throw new Error('Lang is not string :: changeLanguage');

    dispatch({
        type: UPDATE_USER,
        payload: {
            language
        }
    });

};

export const acChangeTheme = () => (dispatch, getState) => {

    dispatch({
        type: UPDATE_USER,
        payload: {
            theme: getState().user.theme === 'light' ? 'dark' : 'light'
        }
    });

};

export const acLogin = (token) => (dispatch) => {

    localStorage.setItem('token', token);

    const {user_id: userId} = jwt(token);

    dispatch({
        type: UPDATE_USER,
        payload: {
            isAuthorized: true,
            id: userId,
            token
        }
    });

};

export const acLogout = () => (dispatch) => {

    localStorage.removeItem('token');

    dispatch({
        type: UPDATE_USER,
        payload: {
            isAuthorized: false
        }
    });

};
