const leapYears = (year) => {
    for (let i = 0; i < 50000; i ++) {
        if (year === i){
        return i % 4 === 0 && i % 100 === 0 && i % 400 !== 0 ? false
        : i % 4 === 0 ? true
        : false
        }
    }
}

// Do not edit below this line
module.exports = leapYears;
