import React, { useState, useEffect } from 'react';
import Dropdown from '../common/Dropdown';
import { languages } from '../../languages';
import { useTranslation } from 'react-i18next';

const ChangeLang = props => {
    const [selected, setSelected] = useState('en');
    const [direction, setDirection] = [props.direction, props.setDirection]
    const values = Object.keys(languages);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(selected);
        if(selected === "he")
            setDirection({direction: "rtl"})
        else setDirection({direction: "ltr"})
    }, [selected])

    return (
        <div className="lang-select">
            <Dropdown 
            selected={selected} 
            setSelected={setSelected} 
            values={values} />
        </div>
    )
}

export default ChangeLang
