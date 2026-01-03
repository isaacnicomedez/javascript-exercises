const repeatString = function(word, repeat) {
    let newString = '';

    if (repeat < 0) return 'ERROR';

    for (let i = 0; i < repeat; i++) {
        newString += word;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
