import React, {useState, useCallback} from 'react';
import OrdinaryDropdown from "../../Dropdowns/OrdinaryDropdown/OrdinaryDropdown";

import {locales,defaultLocale} from "../../../LanguageControl/LanguageControl";
import {useDispatch, useSelector} from "react-redux";
import {acChangeLanguage} from "../../../redux/actions/acUser";

import style from './LanguageDropdown.scss';

const LanguageDropdown = props => {

    const chosenLanguage = useSelector(state => state.user.language);

    const [chosen, setChosen] = useState(locales[chosenLanguage].name);

    const dispatch = useDispatch();

    const changeLanguage = useCallback(language => dispatch(acChangeLanguage(language)));

    const getLanguages = () => {
        const arrLanguages = [];

        for(let locale in locales) {
            arrLanguages.push(locales[locale]);
        }

        return arrLanguages.map(language => ({
            value: language.name,
            data: language
        }));
    };

    const onChooseLanguage = language => {
        changeLanguage(language.type);
        setChosen(language.name);
    };

    return (
        <OrdinaryDropdown
            variants={getLanguages()}
            chosen={chosen}
            onChooseVariant={onChooseLanguage}
            classNames={{
                trigger: style.trigger,
                variant: style.variant,
                container: style.container,
                dropdown: style.dropdown
            }}
        />
    );
};

export default LanguageDropdown;
