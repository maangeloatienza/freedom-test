const sortFunction = require('./sortFunction')

const nthLargest = (array,nth)=>{
    // Sort the array to descending order
    let sortedArray = sortFunction(array,"desc");
    // Get the value of the nth item and get its index in the original array
    let nthLargestNumber = array.indexOf(sortedArray[nth-1])
    
    return array[nthLargestNumber]
}

module.exports = nthLargest