/*
Problem: Given two finite non-empty sets, find their Cartesian Product
The Cartesian product of two sets A and B, denoted AxB, is the set of all ordered pairs (a,b) where a is in A and b is in B

*/
//O(M*N)
function cartesianProduct(array1,array2){
    const result = []
    for(let i=0; i<array1.length;i++){
        for(let j=0; j<array2.length; j++){
            result.push([array1[i],array2[j]])
        }
    }
}