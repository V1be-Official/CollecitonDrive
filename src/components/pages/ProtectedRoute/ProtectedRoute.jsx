import React from 'react';
import {useSelector} from "react-redux";
import {Route, useHistory} from "react-router";

const ProtectedRoute = props => {

    const history = useHistory();

    const isAuthorized = useSelector(state => state.user.isAuthorized);

    const path = props.path.slice(1).split('/');

    const redirectToHomePage = () => {
        history.push('/');
    };

    const redirectToLoginPage = () => {
        history.push('/login');
    };

    const redirect = () => {

        if(isAuthorized && path[0] === 'login') {
            redirectToHomePage();
            return;
        }

        if(!isAuthorized && path[0] !== 'login' && path[0] !== 'registration') {
            redirectToLoginPage();
        }


    };

    redirect();

    return <Route {...props} />;
};

export default ProtectedRoute;
