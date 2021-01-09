let temp;
const sorting = (i,array) =>{  
    if (array[i] > array[i+1]) 
  { 
    temp = array[i+1]; 
    array[i+1] = array[i]; 
    array[i] = temp; 
  } 
  if (i < array.length-1) 
  { 
    sorting(i+1, array); 
  } 
  return array; 
    
}
const maximum = (array) => {
    if(array.length == 0){
        return undefined; 
    }
    else{
        for(var i=0;i<array.length;i++){
            sorting(0,array)
        }
    return array[array.length-1];
    }
}
module.exports = maximum;