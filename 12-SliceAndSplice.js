function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  let i = 0;
  while (i < arr1.length) {
    newArr.splice(n, 0, arr1[i]);
    i++;
    n++;
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);