import React from 'react';

import Background from './404.jpg';

import style from './PageNotFound.scss';

const PageNotFound = props => {


    return (
        <div
            style={{
                background: `url(${Background}) center`
            }}
            className={style.container}
        >
            404 <br/>
            Page not found :(
        </div>
    );
};


export default PageNotFound;
