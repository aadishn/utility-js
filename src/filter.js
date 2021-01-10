const head = require('./head')
const tail = require('./tail')
let resultingList=[]
const compute= (callbackFunction,list,listLength)=>{
    if (resultingList.length!=listLength){
    if(list.length > 0) {
        if(callbackFunction(head(list))){
        resultingList.push(head(list));
        }
        return compute(callbackFunction,tail(list),listLength)
    }}
    let answer = resultingList
    resultingList=[]
    return answer 
}
const filter = (list, callbackFunction) => {
    var listLength = list.length
    let result = compute(callbackFunction,list,listLength)
    return result;
}

module.exports = filter;