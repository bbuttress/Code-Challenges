const solution = (numbers) => {
    let max = Number.NEGATIVE_INFINITY;
    let numbersLength = numbers.length;
    
    if(numbersLength === 0) {
        return 0;
    }
    
    for (let i = 0; i < numbersLength; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
};
