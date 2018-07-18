export function loopTroughPropsObjAndReturnTranslatedValue (obj, language) {
    const keysArray = Object.keys(obj)
    for(let i = 0; i < keysArray.length; i++) {
        if (keysArray[i] == language.toLowerCase()) {
            return obj[keysArray[i]];
        }
    }
    // keysArray.forEach(element => {
    //     if (element == language.toLowerCase()) {
    //         return obj[element];
    //     }
    // });
}
