const lexicographicalSort = (array,order)=>{
    for(let i=0; i < array.length;i++){
        for(let j=0; j< array.length-1;j++){
            // compare combined consecutive instances
            let first = (array[j+1]).toString() + (array[j]).toString()
            let second = (array[j]).toString() + (array[j+1]).toString()
           
            switch(order.toLowerCase()){
                case "smallest":
                    first<second ? [array[j+1],array[j]] = [array[j],array[j+1]] : [array[j+1],array[j]]
                    break;
                default:
                    first>second ? [array[j+1],array[j]] = [array[j],array[j+1]] : [array[j+1],array[j]]
            }
        }
    }

    return (array.join(""))
}

module.exports = lexicographicalSort