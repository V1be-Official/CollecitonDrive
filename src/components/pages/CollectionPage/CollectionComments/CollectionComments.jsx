import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import style from './CollectionComments.scss';
import Input from "../../../ui/Input/Input";
import {useDataManager} from "../../../custom/DataManager/DataManager";
import Loader from "../../../ui/Loader/Loader";
import {useSelector} from "react-redux";

CollectionComments.propTypes = {
    textaPath: PropTypes.string,
    comments: PropTypes.array,
    loading: PropTypes.bool,
    itemId: PropTypes.any
};

function CollectionComments(props) {

    const [commentValue, setCommentValue] = useState();

    const dataManager = useDataManager();

    const token = useSelector(state => state.user.token);

    const onCommentInput = value => {

        setCommentValue(value);

    };

    const onAddComment = async () => {

        await dataManager.addComment({
            id: props.itemId,
            token,
            description: commentValue
        });

    };

    const onKeyPress = ({keyCode}) => {

        if(keyCode === 13)
            onAddComment();
    };

    const onFocusInput = () => {

        window.addEventListener('keypress', onKeyPress);


    };

    const onBlurInput = () => {


        window.removeEventListener('keypress', onKeyPress);

    };

    return (
        <div className={style.container}>

            <div className={style.comments}>
                {!props.loading && props.comments.map((comment, index) => (
                    <div key={index} className={style.comment}>
                        <div className={style.photo} />
                        <div className={style.commentInfo}>
                            <span className={style.date}>{comment.creation_date}</span>
                            <span className={style.name}>{comment.owner}</span>
                            <span className={style.text}>{comment.description}</span>
                        </div>
                    </div>
                ))}
                {
                    props.loading && (
                        <div className={style.dimmer}>
                            <Loader ballClassName={style.ball}/>
                        </div>
                    )
                }
            </div>

            <div className={style.actions}>
                <div className={style.photo} />
                <Input onFocus={onFocusInput} onBlur={onBlurInput} className={style.input} placeholder={`Type something`} value={commentValue} onChange={onCommentInput} />
                <button className={style.send} onClick={onAddComment} />
            </div>

        </div>
    );
}

export default CollectionComments;
