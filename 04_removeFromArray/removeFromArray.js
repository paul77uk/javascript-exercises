const removeFromArray = (arr, ...args) => 
// returns a new filtered array adding values are not equal to any item of the args
// as in !args.includes(val), it's checking then, each iterated val is not included in the args.
    arr.filter((val) => !args.includes(val))

// Do not edit below this line
module.exports = removeFromArray;
