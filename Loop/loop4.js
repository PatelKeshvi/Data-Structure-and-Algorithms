// 1  2  3  4
// 5        8
// 9        12
// 13 14 15 16

let matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

let m = matrix.length;
let n = matrix[0].length;

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
            console.log(matrix[i][j]);
            
        }
    }
}