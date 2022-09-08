const palindromes = (s) => s.split("").reverse().join("").toLowerCase().replace(/[^a-z]/g, "") === s.toLowerCase().replace(/[^a-z]/g, "");

// Do not edit below this line
module.exports = palindromes;
