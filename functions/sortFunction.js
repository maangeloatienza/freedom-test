const sortArray = (array,order)=>{
    for(let i = 0; i <= array.length; i++){
        for(let j = 0; j < array.length-1;j++){
            switch(order.toLowerCase()){
                case "desc":
                    if(array[j+1] > array[j]){
                        [array[j+1],array[j]] = [array[j],array[j+1]]
                    }
                    break;
                default:
                    if(array[j+1] < array[j]){
                        [array[j+1],array[j]] = [array[j],array[j+1]]
                    }
            }
        }
    }

    return array
}

module.exports = sortArray