const lexicographicalSort = require("./../functions/lexicographicalSort");

describe("Sort items in lexicographical order",()=>{
    test("it should return the largest formed number from the array",()=>{
        let array = [2, 20, 24, 6, 8]
        let output = "8624220"

        expect(lexicographicalSort(array,"largest")).toEqual(output)
    })

    test("it should return the smallest formed number from the array",()=>{
        let array = [2, 20, 24, 6, 8]
        let output = "2022468"

        expect(lexicographicalSort(array,"smallest")).toEqual(output)
    })
})