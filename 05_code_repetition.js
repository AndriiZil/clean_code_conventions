// bad practice
const array = [ [ ['Shoaib Mehedi'] ] ]
array.forEach((firstArr) =>{
    firstArr.forEach((secondArr) => {
        secondArr.forEach((element) => {
            console.log(element);
        })
    })
})

// good practice
const array2 = [ [ ['Shoaib Mehedi'] ] ]
const getValuesOfNestedArray = (element) => {
    if (Array.isArray(element)) {
        return getValuesOfNestedArray(element[0])
    }
    return element
}
getValuesOfNestedArray(array)
