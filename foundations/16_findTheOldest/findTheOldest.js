function getDeath(person) {
    return death = !person.yearOfDeath ? (new Date()).getFullYear() : person.yearOfDeath;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        const current = getDeath(person) - person.yearOfBirth;

        return current > getDeath(oldest) - oldest.yearOfBirth ? person : oldest; 
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
