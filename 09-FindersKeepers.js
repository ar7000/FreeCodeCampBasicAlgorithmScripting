function findElement(arr, func) {
    let filtered = arr.filter(num => func(num) === true);
    return filtered[0];
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  //Could also be done with a for loop...

  function findElement(arr, func) {
    let num = 0;
    for(let i=0;i < arr.length;i++){
      num = arr[i];
      if(func(num)){
        return num;
      }
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);  