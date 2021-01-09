const tail = (array) => {
    if(array.length == 0)
      return undefined; 
    array.shift();  
    return array;
}
module.exports = tail;