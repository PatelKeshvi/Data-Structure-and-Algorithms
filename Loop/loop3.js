// 1 2 3 4
// 5 6 7 8
// 9 10 11 12 
// 13 14 15 16 

let number = 1; 

for (let i = 0; i < 4; i++) { 
    let row = ''; 
    for (let j = 0; j < 4; j++) { 
        row += number; 
        if (j < 3) {
            row += ' ';
        }
        number++;
    }
    console.log(row); 
}