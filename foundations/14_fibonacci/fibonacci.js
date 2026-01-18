const fibonacci = function(n) {
    n = +n;
    if (n === 0) return 0;
    if (n < 0) return "OOPS";

    const arr = [1, 1]
    for (let i = 1; i < n-1; i++) {
        arr.push(arr[i] + arr[i-1]);
    }

    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
