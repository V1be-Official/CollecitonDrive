import React, {useState} from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './CollectionItems.scss';
import Item from "../../../icons/Item";

CollectionItems.propTypes = {
    textaPath: PropTypes.string,
    items: PropTypes.array,
    onSelectItem: PropTypes.func
};

CollectionItems.defaultProps = {
    items: []
};

function CollectionItems(props) {
    const [activeItem, setActiveItem] = useState(null);

    const onItemClick = (id) => {

        setActiveItem(id);

        props.onSelectItem && props.onSelectItem(id);

    };

    const getFields = fields => {

        const items = [];

        for(let field in fields) {


            items.push(
                <span key={field} className={style.itemField}>
                    <span>{field}: </span>
                    <span>{fields[field]}</span>
                </span>
            );

        }

        return items;

    };

    return (
        <div className={style.container}>
            <span className={style.title}>Items</span>
            <button className={style.addItem}>Add new item</button>
            <div className={style.items}>
                {
                    props.items && props.items.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={classNames(style.item, item.id === activeItem && style.active)}
                                onClick={() => onItemClick(item.id)}

                            >

                                <span className={style.itemTitle}>
                                    <Item/>
                                    {item.name}
                                </span>

                                <div className={style.fields}>
                                    {
                                        getFields(item.fields)
                                    }
                                </div>

                            </div>
                        );

                    })
                }
            </div>
        </div>
    );
}

export default CollectionItems;
