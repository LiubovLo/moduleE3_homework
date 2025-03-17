function printNumbers(start, end) {
    let current = start; 

    const intervalId = setInterval(() => {
        if (current > end) {
            clearInterval(intervalId);
            return;
        }
        console.log(current); 
        current++; 
    }, 1000); 
}

printNumbers(5, 15); 
