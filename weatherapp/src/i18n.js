import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages, dictionary } from './languages';

const resources = dictionary;
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        whitelist: Object.keys(languages),

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;