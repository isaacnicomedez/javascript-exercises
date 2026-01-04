const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !(Number.isInteger(start) && Number.isInteger(end))) return `ERROR`;

    let highest = start < end ? end : start;
    let lowest = start < end ? start : end;

    let sum = 0;
    for (let i=lowest; i<=highest; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
