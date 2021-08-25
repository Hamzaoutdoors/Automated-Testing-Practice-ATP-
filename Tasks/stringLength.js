const stringLength = (str) => {
    if(str.length < 1 && str.length > 10){
        throw('your number is not in the rang');
    }else{
        return str.length;
    }
}

module.exports = stringLength;