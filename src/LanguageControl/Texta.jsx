import React from 'react';
import PropTypes from 'prop-types';


import {useLanguage} from "./LanguageControl";

const Texta = props => {
    const languageControl = useLanguage();

    const text = languageControl.get(props.path);

    return text || null;
};

Texta.propTypes = {
    path: PropTypes.string.isRequired
};

export default Texta;
