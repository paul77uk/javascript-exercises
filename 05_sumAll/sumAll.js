const sumAll = (a, b) => {
    let total = 0;
    if (a < 0 || b < 0 || typeof a  !== "number" || typeof b !== "number") return "ERROR"
    else if (b > a)  {
        for (let i = a; i <= b; i++) total += i;
    } 
    else if (a > b) {
        for (let i = b; i <= a; i++) total += i;
    }
    return total 
}


// take 2 inputs
// have a total variable = 0
// for loop from input1 to input2 inclusive, adding each to total

// Do not edit below this line
module.exports = sumAll;
