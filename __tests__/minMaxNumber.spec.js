const minMax = require('./../functions/minMaxNumber')

// describe("Highest to loweest v/v",()=>{
//     test("it should return the index highest number in array with ascending order",()=>{
//         let array = [1,2,3,4,5];
//         let output = 4

//         expect(minMax(array,"highest")).toEqual(output)
//     })

//     test("it should return the index highest number in array with descending order",()=>{
//         let array = [5,4,3,2,1];
//         let output = 0

//         expect(minMax(array,"highest")).toEqual(output)
//     })

//     test("it should return the index highest number in array with random order",()=>{
//         let array = [1,2,5,3,4];
//         let output = 2

//         expect(minMax(array,"highest")).toEqual(output)
//     })
// })
describe("Highest or lowest v/v",()=>{
    test("it should return the Nth item with highest number in an array ",()=>{
        let array = [1,2,3,4,5];
        let output = 5

        expect(minMax(array,"highest")).toEqual(output)
    })

    test("it should return the Nth item with highest number in an array ",()=>{
        let array = [1,2,3,4,5];
        let output = 5

        expect(minMax(array,"highest")).toEqual(output)
    })

})