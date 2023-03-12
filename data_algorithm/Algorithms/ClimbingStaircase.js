/* 
Problem: Given a staircase of 'n' steps, count the number of distinct ways to climb to the top
You can either climb 1 step or 2 steps at a time
*/

const climbing = (steps) =>{
    const numOfWays = [1,2]
    for(let i=2;i<steps;i++){
        numOfWays[i] = numOfWays[i-1]+numOfWays[i-2]

    }
    return numOfWays[steps-1]

}