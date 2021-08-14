module.exports = function toReadable (number) {
    let wordNumber = '';

    const hundreds = parseInt(number / 100);
    const dec = parseInt(number % 100 / 10);
    const ed = number % 10;

    if (number === 0) {
        return 'zero';
    }

    if (hundreds > 0) {
        wordNumber += numberToWord(hundreds) + ' hundred';
    }

    if (dec >= 2) {
        wordNumber += ' ' + numberDec(dec);

        if (ed > 0) {
            wordNumber += ' ' + numberToWord(ed);
        }
    }
    else if (dec === 1) {
        wordNumber += ' ' + numbersFrom1(ed);
    }
    else {
        wordNumber += ' ' + numberToWord(ed);
    }

    return wordNumber.trim();
};

function numberDec(n) {
    switch (n) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
        default:
            return '';
    }
}

function numbersFrom1(n) {
    switch (n) {
        case 0:
            return 'ten';
        case 1:
            return 'eleven';
        case 2:
            return 'twelve';
        case 3:
            return 'thirteen';
        case 4:
            return 'fourteen';
        case 5:
            return 'fifteen';
        case 6:
            return 'sixteen';
        case 7:
            return 'seventeen';
        case 8:
            return 'eighteen';
        case 9:
            return 'nineteen';
        default:
            return '';
    }
}

function numberToWord(n) {
    switch (n) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return '';
    }
}