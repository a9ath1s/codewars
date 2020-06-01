function swichCase(str) {
    chars = str.split('')

    for (let i = 0; i < chars.length; i++) {
        if ((chars[i].charCodeAt() > 64 && chars[i].charCodeAt() < 91)
            || (chars[i].charCodeAt() > 191 && chars[i].charCodeAt() < 224)) {

            chars[i] = String.fromCharCode(chars[i].charCodeAt() + 32);

        }
        else if ((chars[i].charCodeAt() > 96 && chars[i].charCodeAt() < 123)
            || (chars[i].charCodeAt() > 223 && chars[i].charCodeAt() < 256)) {

            chars[i] = String.fromCharCode(chars[i].charCodeAt() - 32);

        }
    }
    return 'orig: ' + str + ' mod: ' + chars.join('');
};

console.log(swichCase("aA"))
console.log(swichCase("aSfrt5JHkj(p"))