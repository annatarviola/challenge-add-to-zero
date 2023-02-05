// Starting array
let array = [0, 1, 2, 3, 4, 5]

// Write your solution below:

let isSumZero = false
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {    
            if (array[i] + array[j] === 0) {
                isSumZero = true;
            }
        }    
    } 
}    

console.log(sumZero)