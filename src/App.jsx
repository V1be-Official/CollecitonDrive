import React, {useEffect} from 'react';

import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/pages/ProtectedRoute/ProtectedRoute";
import Homepage from "./components/pages/Homepage/Homepage";
import LoginPage from "./components/pages/Login/LoginPage/LoginPage";
import RegistrationPage from "./components/pages/Login/RegistrationPage/RegistrationPage";
import AccountPage from "./components/pages/AccountPage/AccountPage";
import CollectionPage from "./components/pages/CollectionPage/CollectionPage";
import {useAuth} from "./components/custom/DataManager/useAuth";

const App = (props) => {

    useAuth();

    return (
        <>
            <Router>
                <Switch>
                    <ProtectedRoute path={'/'} render={(props) => <Homepage {...props} textaPath={'CD.homepage'} />} exact />
                    <ProtectedRoute path={'/login'} render={(props) => <LoginPage {...props} textaPath={'CD.login'} />} exact />
                    <ProtectedRoute path={'/registration'} render={props => <RegistrationPage {...props} textaPath={'CD.registration'} />} exact />
                    <ProtectedRoute path={'/account/:id'} render={props => <AccountPage {...props} textaPath={'CD.account'} />} exact />
                    <ProtectedRoute path={'/collection/:id'} render={props => <CollectionPage {...props} textaPath={'CD.collection'} />} />
                    <Route path={'/'}>
                        <Redirect to={'/404'} />
                    </Route>
                </Switch>

                <Route path={'/404'} component={PageNotFound} />
            </Router>
        </>
    );
};

export default App;
