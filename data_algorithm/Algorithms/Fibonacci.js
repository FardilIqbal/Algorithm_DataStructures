//Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones
//O(n)

/*
const fibonacci = (n)=>{

    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] +  fib[i-2]
    }
    return fib;

}
*/

//O(2^n)
const fibonacci = (n) =>{
    if(n<2){
        return n
    }
    return (fibonacci(n-1)+fibonacci(n-2))
}

console.log(fibonacci(6)) //8