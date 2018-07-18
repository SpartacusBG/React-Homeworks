import React from 'react';
import { loopTroughPropsObjAndReturnTranslatedValue } from '../helpers/object.helper'
const Article = (props) => {
    const { title, language } = props;  // tova ni spestqva da pi6em props.title, props,te;xt
    const text = props.children;
    const defaultLanguage = 'DE';

    if (!title || !text) {
        throw new Error('no Data')
    }

    let newLanguage = returnSelectedLanguage(language, defaultLanguage);
    let translatedTitle = loopTroughPropsObjAndReturnTranslatedValue(title, newLanguage);
    let translatedText = loopTroughPropsObjAndReturnTranslatedValue(text, newLanguage);

    translatedTitle = capitalizeFirstLetter(translatedTitle);

    function capitalizeFirstLetter(string) {
        let newString = string.toLowerCase();
        return newString.charAt(0).toUpperCase() + newString.slice(1);
    }

    function returnSelectedLanguage (language, defaultLanguage) {
       return (!language) ? defaultLanguage : language;
    }

    return (
        <div className="container">
            <div className="language-container">
                {newLanguage}
            </div>
            <div >
                <h1>{translatedTitle}</h1>
                <p>{translatedText}</p>
            </div>
        </div>
    );
};

export default Article;