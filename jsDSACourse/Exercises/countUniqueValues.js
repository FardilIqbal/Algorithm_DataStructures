//Multiple Pointers Example
function countUniqueValues(arr1){
    // add whatever parameters you deem necessary - good luck!
    if(!arr1){
        return 0
    }
    let pointer1 = 0
    let pointer2 = 0
    let numberOf = 0
    for(let x of arr1){
        pointer2 += 1
        if(arr1[pointer1] !== arr1[pointer2]){
            numberOf +=1
            pointer1 = pointer2
        }
        
    }
    return numberOf
  }