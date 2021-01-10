const tail = require('./tail');
const head = require('./head');

const compute = (list, callBackFunction,result) => {
    if(list.length >0 ){
         return result+callBackFunction(head(list), compute(tail(list),callBackFunction,result));
    }
    return result;
}

const reduce = (list, callBackFunction,initialValue) =>
{
    let value
    if (initialValue == undefined){
    if (typeof (list[0]) == 'string') {
        value = "";
    }
    else if (typeof(list[0]) == "number") {
        value = 0;
    }
    else {
        value = undefined;
    }
}
else{
    value = initialValue;     
}
if(list.length==0){
    return value
}

var result = value+compute(list, callBackFunction,value);
return result    
   
}

module.exports = reduce;
