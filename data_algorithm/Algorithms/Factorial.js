//Find factorial of an integer: Factorial of a non negative integer 'n', denonted n!, is the product of all postive integers less than or equal to 'n'
/*
const factorial = (n) =>{
    let num=1;
    if (n==0){
        return num
    }
    else{
        for(let i=n;i>0;i--){
            num = i*num;
        }
    }
    return num
}
*/
/* const factorial = (n) =>{
    let result = 1
    for (let i=2; i<=n;i++){
        result = result*i
    }
    return result
}


*/

const factorial = (n) =>{
    if(n==0){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5));