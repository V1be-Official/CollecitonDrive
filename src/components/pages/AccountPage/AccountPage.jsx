import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import style from './AccountPage.scss';
import {useHistory, useParams} from "react-router";
import Navbar from "../Navbar/Navbar";
import AccountInfo from "./AccountInfo/AccountInfo";
import AccountCollection from "./AccountCollection/AccountCollection";
import {useDataManager} from "../../custom/DataManager/DataManager";
import Loader from "../../ui/Loader/Loader";
import Dimmer from "../../ui/Dimmer/Dimmer";

const AccountPage = props => {

    const params = useParams();
    const dataManager = useDataManager();

    const [data, updateData] = useState({});

    const [loading, updateLoading] = useState(false);

    useEffect(() => {

        async function loadData() {
            updateLoading(true);

            const response = await dataManager.getUserData({
                id: params.id
            });

            updateLoading(false);

            updateData(response);
        }

        loadData();
    }, []);

    return (
        <div className={style.container}>
            <Navbar />
            <AccountInfo data={data} />
            <AccountCollection />
            <Dimmer active={loading} />
        </div>
    );
};

AccountPage.propTypes = {

    textaPath: PropTypes.string

};


export default AccountPage;
