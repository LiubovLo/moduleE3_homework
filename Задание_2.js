function isPrimeNumber(num) {
    if (num > 1000) {
        console.log("Данные неверны. Число должно быть не больше 1000.");
        return;
    }

    if (num === 0 || num === 1) {
        console.log(`${num} не является простым числом.`);
        return;
    }

    if (num < 0) {
        console.log("Отрицательные числа не могут быть простыми.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} не является простым числом.`);
            return;
        }
    }

    console.log(`${num} является простым числом.`);
}
