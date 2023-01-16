// A prime number is a natural number gerater than 1 that is not a product of two smaller natural numbers

const isPrime = (n) =>{
    if(n<2){
        return false;
    }
    for(let i = 2;i<n;i++){ //Optimally, can use i<=Math.sqrt(n)
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))