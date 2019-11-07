function confirmEnding(str, target) {
    let ending = str.substr((str.length) - target.length);
    if (ending === target) {

        return true;

    }

    return false;

}

confirmEnding("Bastian", "an"); 