const findTheOldest = (people) => {
    var max = 0;
    var oldestPerson = {};
    people.forEach((person) => {
        var deadOrAliveYear = person.yearOfDeath == null ? new Date().getFullYear() : person.yearOfDeath
        var age =  deadOrAliveYear - person.yearOfBirth;
        if (age > max) {
            max = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
