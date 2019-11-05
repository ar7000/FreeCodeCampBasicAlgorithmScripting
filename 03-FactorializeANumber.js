function factorialize(num) {
    let number = 1;
    for (let i = 1; i <= num; i++) {
        number *= i;
    }
    return number;
}

console.log(factorialize(5));  