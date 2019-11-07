function repeatStringNumTimes(str, num) {
    if (num >= 1) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(str);
        }
        let outputStr = arr.join('');
        return outputStr;
    }
    return "";
}

console.log(repeatStringNumTimes("abc", 3));

//Could also be done with while loop...

function repeatStringNumTimes(str, num) {
    let outputStr = "";
    while (num > 0) {
        outputStr += str;
        num--;
    }

    return outputStr;
}

repeatStringNumTimes("abc", 3);  