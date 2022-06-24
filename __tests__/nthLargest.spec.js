const nthLargest = require("./../functions/nthLargest")

describe("Return the Nth largest number",()=>{
    test("it should return the Nth largest number in an array",()=>{
        let array = [3,2,1,5,6,4]
        let nth = 2
        let output = 5

        expect(nthLargest(array,nth)).toEqual(output)
    })
})