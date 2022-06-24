const sortArray = require('./../functions/sortFunction')


describe("Sort function", ()=>{
    test("it should sort array items in ascending order",()=>{
        let array = [12,1,14,99,75]
        let output = [1,12,14,75,99]

        expect(sortArray(array,"ASC")).toEqual(output)
    })

    test("it should sort array items in descending order",()=>{
        let array = [12,1,14,99,75]
        let output = [99,75,14,12,1]

        expect(sortArray(array,"DESC")).toEqual(output)
    })
})