const fibonacci = (num) => {
    var result = 0;
    var first = 0;
    var second = 1;
    for (var i = 2; i <= Number(num); i++) {
        result = first + second; 
        first = second; 
        second = result; 
    }
    return Number(num) == 1 ? 1 : Number(num) > 0 ? result : Number(num) == 0 ? 0 : "OOPS";
}

// Do not edit below this line
module.exports = fibonacci;
