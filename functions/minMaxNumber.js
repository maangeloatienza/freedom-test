const minMax = (array,order)=>{
    // set the initial comparator to the first index
    let temp = array[0]
    
    for(let j=0; j < array.length;j++){
        switch(order.toLowerCase()){
            // if order set to lowest
            case "lowest":
                // check if the temp variable is greater than the array[j]
                if(temp > array[j]){
                    // if met the condition set the value of temp to the value of the current iteration
                    temp = array[j]
                }
                break;
            // if order was set to highest or nothing was set
            default:
                // check if the temp variable is less than the array[j]
                if(temp < array[j]){
                    // if met the condition set the value of temp to the value of the current iteration
                    temp = array[j]
                }
        }
    }
    // return the largest number
    return temp

}

module.exports = minMax