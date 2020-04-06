import {useMemo} from 'react';
import en from './en.json';
import ru from './ru.json';
import {useSelector} from "react-redux";


export const defaultLocale = 'en';
export const locales = {
    en: {
        name: "English",
        type: "en",
        locale: en
    },
    ru: {
        name: "Русский",
        type: "ru",
        locale: ru
    }
};

class LanguageControl {
    constructor(type = defaultLocale) {

        if(!(type in locales))
            throw new Error(`${type} is not exist as locale :: LanguageControl`);

        this.locale = locales[type].locale;
    }

    get = type => {
        if(type in this.locale)
            return this.locale[type];
        else
            console.error(`Bad path: ${type} :: LanguageControl`)
    };
}

export const useLanguage = () => {

    const language = useSelector(state => state.user.language);
    const languageControl = useMemo(() => new LanguageControl(language), [language]);


    return languageControl;
};
