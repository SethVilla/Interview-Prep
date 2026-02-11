const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

const reverseStr2 = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reverseStr3 = (str) => {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

const reverseStr4 = (str) => {
    if (str.length <= 1 || typeof str !== 'string') return str;
    const reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}

console.log(reverseStr('hello'));
console.log(reverseStr2('hello'));
console.log(reverseStr3('hello'));
console.log(reverseStr4('hello'));