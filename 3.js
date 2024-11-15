function drawImage(size) {
    // Check if size is odd
    if (size % 2 === 0 || size < 1) {
        console.log("Please provide an odd number greater than 0");
        return;
    }

    const middle = Math.floor(size / 2);
    
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if (
                
                ((i === 0 || i === size-1) && (j === 0 || j === middle || j === size-1)) ||
                
                (i === middle && j !== middle) ||
                
                (j === middle && i !== 0 && i !== size-1 && i !== middle)
            ) {
                row += '* ';
            } else {
                row += '# ';
            }
        }
        console.log(row);
    }
}


console.log("Pattern for size 5:");
drawImage(5);

console.log("\nPattern for size 7:");
drawImage(7);