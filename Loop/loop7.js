//     *
//    * * 
//   * * *
//  * * * *
// * * * * *

const rows = 5; 

for (let i = 1; i <= rows; i++) { 
    let row = ''; 

    for (let j = 1; j <= rows - i; j++) {
        row += ' '; 
    }

    for (let j = 1; j <= i; j++) {
        row += '*'; 
        if (j < i) { 
            row += ' ';
        }
    }
    console.log(row); 
}