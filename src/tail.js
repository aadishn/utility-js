const tail = (arr) => {
    if(arr.length == 0)
      return undefined; 
    arr.shift();  
    return arr;
}
module.exports = tail;