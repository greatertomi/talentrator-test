
/**
 * ALGORITHMS
 * 
 * Implement an algorithm that can pass the unit tests. 
 * Avoid using built-in functions as much as possible
 * 
 * Difficulty: Medium
 */

function sort (arr) {
    let newArray = [];
    if (arr.length > 0) {
        newArray = arr;
    }

    newArray.sort((a, b) => a - b);
    return JSON.stringify(newArray);
}

function require (condition) {
    if (!condition)
        console.warn ("CONDITION WAS NOT MET");
}

require (sort ([]) == JSON.stringify([]));
require (sort ([1, 2, 3, 4, 5]) == JSON.stringify([1, 2, 3, 4, 5]));
require (sort ([1, 3, 4, 2, 5]) == JSON.stringify([1, 2, 3, 4, 5]));
