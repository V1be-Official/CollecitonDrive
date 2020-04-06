import React, {useState} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import Modal from "../../../../ui/Modal/Modal";

import style from './CreationCollectionModal.scss';
import Input from "../../../../ui/Input/Input";
import ButtonPrimary from "../../../../ui/ButtonPrimary/ButtonPrimary";
import {useDataManager} from "../../../../custom/DataManager/DataManager";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";


CreationCollectionModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
};

function CreationCollectionModal(props) {

    const dataManager = useDataManager();

    const history = useHistory();

    const token = useSelector(state => state.user.token);

    const [name, setName] = useState('');

    const [typeCollection, setTypeCollection] = useState('');

    const [description, setDescription] = useState('');

    const onChangeName = value => {

        setName(value);

    };

    const onChangeTypeCollection = value => {

        setTypeCollection(value);

    };

    const onChangeDescription = ({target}) => {

        setDescription(target.value);

    };

    const onSubmit = async () => {

        const response = await dataManager.addCollection({
            name,
            description,
            type: typeCollection,
            token
        });

        history.push('/collection/' + response.id);

        console.log(response);

    };

    return (
        <Modal
            className={style.container}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onOpen={props.onOpen}
        >
            <div className={style.content}>
                <span className={style.mainTitle}>New collection</span>
                <div className={classNames(style.group)}>
                    <span className={style.title}>
                        Name
                    </span>
                    <Input className={style.input} value={name} placeholder={"Write here"} onChange={onChangeName} />
                </div>

                <div className={classNames(style.group)}>
                    <span className={style.title}>
                        Type
                    </span>
                    <Input className={style.input} value={typeCollection} placeholder={"Write here"} onChange={onChangeTypeCollection} />
                </div>

                <div className={classNames(style.group)}>
                    <span className={style.title}>
                        Type
                    </span>
                    <textarea className={style.textarea} value={description} onChange={onChangeDescription} />
                </div>

                <ButtonPrimary onClick={onSubmit} />

            </div>
        </Modal>
    );
}

export default CreationCollectionModal;
