import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import style from './CollectionPage.scss';
import Navbar from "../Navbar/Navbar";
import CollectionItems from "./CollectionItems/CollectionItems";
import CollectionComments from "./CollectionComments/CollectionComments";
import {useParams} from "react-router";
import {useDataManager} from "../../custom/DataManager/DataManager";
import Dimmer from "../../ui/Dimmer/Dimmer";
import {comment} from "postcss";

CollectionPage.propTypes = {
    textaPath: PropTypes.string
};

function CollectionPage(props) {

    const {id} = useParams();

    const dataManager = useDataManager();

    const [collectionData, setCollectionData] = useState({});

    const [loading, setLoading] = useState(true);

    const [loadingComments, setLoadingComments] = useState(false);

    const [comments, setComments] = useState([]);

    const onSelectItem = async id => {
        setLoadingComments(true);

        const response = await dataManager.getItemData(id);

        setComments(response.comments);

        setLoadingComments(false);

    };

    useEffect(() => {

        async function getData() {

            setLoading(true);

            const response = await dataManager.getCollectionData({id});

            setLoading(false);

            setCollectionData(response);

        }

        getData();

    }, []);

    return (
        <div className={style.container}>
            <Navbar />
            <CollectionItems onSelectItem={onSelectItem} items={collectionData.items} />
            <CollectionComments loading={loadingComments} comments={comments} />
            <Dimmer active={loading} />
        </div>
    );
}

export default CollectionPage;
