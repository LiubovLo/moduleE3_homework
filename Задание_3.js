function createSumFunction(num1) {
    return function (num2) {
        return num1 + num2; 
    };
}

console.log (createSumFunction(2)(3))
