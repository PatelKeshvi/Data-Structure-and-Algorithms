// * * * * *
//  * * * *
//   * * *
//    * *
//     *

const rows = 5; 

for (let i = 0; i < rows; i++) { 
    let row = ''; 

    for (let j = 0; j < i; j++) {
        row += ' '; 
    }

    for (let j = 0; j < rows - i; j++) {
        row += '*'; 
        if (j < rows - i - 1) { 
            row += ' '; 
        }
    }

    console.log(row); 
}