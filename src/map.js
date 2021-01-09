const map = (list, func) => {
    const resultingList = [];
    for (let index = 0; index < list.length; index++) {
        resultingList.push(func(list[index], index, list));
    }
    return resultingList;
}

module.exports = map;