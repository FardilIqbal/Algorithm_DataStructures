//canSum(targetSum, numbers) takes in a targetSum an array of numbers as arguments

//The function should return a boolean indicating whether or not it is possible to generate the target sum using numbers from the array

//You may use an element of the array as many times as needed
//You may assume that all input numbers are nonnegative

const canSum = (targetSum, numbers) =>{
    if(targetSum ===0) return true
    for(let num of numbers){
        const difference = targetSum - num
        if(canSum(difference,numbers) === true){
            return true
        }
    }
    return false
}

/*
Memoization:
1. Make something that works
2. Make it efficient

*/