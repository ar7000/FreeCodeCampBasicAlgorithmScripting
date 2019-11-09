function titleCase(str) {
    let split = str.toLowerCase().split(' ');
    let newStr = [];
    for(let i = 0;i < split.length;i++){
      newStr.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));
    }
    return newStr.join(' ');
  }
  
  titleCase("I'm a little tea pot");