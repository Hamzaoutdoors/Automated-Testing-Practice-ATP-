const capitalize = (str) => {
    if (str === '') {
        throw new Error('add a string')
    } else if (typeof str !== "string") {
        throw new Error('Only accept string');
    }
    let strArr = str.split('')
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

module.exports = capitalize;