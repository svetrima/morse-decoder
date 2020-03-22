const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let pattern = /(\d{10})/g;
    let stringSym = expr.split(pattern);
    let strTenSymbols = stringSym.join(' ');
    //let delSpace = strTenSymbols.replace(/(\*{10})/g, '//');
    let replaceSymbol = strTenSymbols.replace(/10/g, '.').replace(/11/g, '-')
        .replace(/00/g, '').replace(/(\*{10})/g, '//');

    let arrSym = replaceSymbol.split(' ');
    let morseDecode = arrSym.map(word => {
        for (let value in MORSE_TABLE) {
            if (word === '//') {
                return ' ';
            }
            if (word === value) {
                return MORSE_TABLE[value];
            }
        }
    })
    return result = morseDecode.join('');

}

module.exports = {
    decode
}