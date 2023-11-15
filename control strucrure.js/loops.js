// Using for loop
function squaresWithFor() {
    console.log('Squares with for loop:');
    for (let i = 1; i <= 5; i++) {
        console.log(`Square of ${i}: ${i * i}`);
    }
}

// Using while loop
function squaresWithWhile() {
    console.log('\nSquares with while loop:');
    let i = 1;
    while (i <= 5) {
        console.log(`Square of ${i}: ${i * i}`);
        i++;
    }
}// Using do-while loop
function squaresWithDoWhile() {
    console.log('\nSquares with do-while loop:');
    let i = 1;
    do {
        console.log(`Square of ${i}: ${i * i}`);
        i++;
    } while (i <= 5);
}

// Run the programs
squaresWithFor();
squaresWithWhile();
squaresWithDoWhile();
