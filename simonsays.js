// Original Code 
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [4, 3]]
let number = 0
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true;
        console.log("This location is invalid");
        number += 1;
    }
}
console.log(`There were ${number} invalid locations`)

