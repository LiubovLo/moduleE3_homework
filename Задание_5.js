power = (x, n) => {
    if (Number.isInteger(x) && Number.isInteger(n) && x >=0 && n >=0){
        console.log(x ** n)
    } else {console.log("Введите натуральные числа")}

}
power(5,2)
