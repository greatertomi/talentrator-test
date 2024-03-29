
/**
 * TYPOS
 * 
 * Please fix every typo, syntax errors and other small issues
 * 
 * Difficulty: easy
 */

const MatrixA = [
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6]
];

const MatrixB = [
    [2, 3, 1],
    [0, 0, 0],
    [1, 5, 3]
];

// Assuming the matrices passed are both 3x3 in size
function multiplyMatrices (a, b) {
    let newMatrix = [];
    for (let i = 0; i < 3; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < 3; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                sum += a[i][k] * a[k][j];
            }
            newMatrix[i][j] = sum;
        }
    }

    return newMatrix;
}

console.log (multiplyMatrices (MatrixA, MatrixB));
