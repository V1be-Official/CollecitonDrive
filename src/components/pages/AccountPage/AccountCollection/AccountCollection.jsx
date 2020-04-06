import React, {useState} from 'react';

import PropTypes from 'prop-types';

import style from './AccountCollection.scss';
import ButtonPrimary from "../../../ui/ButtonPrimary/ButtonPrimary";
import Search from "../../../ui/Search/Search";
import Modal from "../../../ui/Modal/Modal";
import CreationCollectionModal from "./CreationCollectionModal/CreationCollectionModal";

AccountCollection.propTypes = {

};

function AccountCollection(props) {

    const collections = [];

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className={style.container}>
            <span className={style.title}>
                Your collections
            </span>

            <div className={style.actions}>
                <ButtonPrimary onClick={() => setModalOpened(true)}>Create new collection</ButtonPrimary>
                <Search className={style.search} placeholder={`Collection, items...`} />
            </div>

            {
                collections.length ? (
                    <div className={style.collections}>
                        {collections.map((collection, index) => (
                            <div key={index} className={style.collection}>321321</div>
                        ))}
                    </div>
                ) : (<span className={style.noCollections}>You don't have collections</span>)
            }

            <CreationCollectionModal
                isOpen={true || modalOpened}
                onClose={() => setModalOpened(false)}
                onOpen={() => setModalOpened(true)}
            />
        </div>
    );
}

export default AccountCollection;
