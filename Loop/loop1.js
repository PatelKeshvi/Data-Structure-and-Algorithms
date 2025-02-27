// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for (let i = 0; i < 4; i++) { 
    let row = ''; 
    for (let j = 1; j <= 4; j++) { 
        row += j; 
        if (j < 4) { 
            row += ' ';
        }
    }
    console.log(row); 
}