import React from 'react';

import PropTypes from 'prop-types';

import style from './AccountInfo.scss';

const AccountInfo = props => {


    return (
        <div className={style.container}>
            <span className={style.usernameTitle}>{props.data.username}</span>

            <div className={style.userPhoto} />
            <button className={style.btnChangePhoto}>Change photo</button>

            <span className={style.countCollections}>
                Has {props.data.total_collections} collections
            </span>
        </div>
    );
};

AccountInfo.propTypes = {

    data: PropTypes.shape({
        username: PropTypes.string,
        total_collections: PropTypes.number
    }).isRequired

};

export default AccountInfo;
