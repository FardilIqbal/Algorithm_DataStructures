//Memoization
// Using a fast access data structure (Objects/Hash map)
// Keys will be arg to fn, value will be the return value
//O(n) - Time
//O(n) - Space
const fib = (n, memo={}) =>{
    if(n in memo) return memo[n]; //String key
    if(n <= 2) return 1
    memo[n] = fib(n-1, memo)+fib(n-2,memo) //pass by reference
    return memo[n]
};