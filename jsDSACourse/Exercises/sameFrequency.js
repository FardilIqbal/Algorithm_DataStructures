//Frequency Counter Example
function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    
    let num1String = num1.toString()
    let num2String = num2.toString()
    let frequencies = {}
    if(num1String.length != num2String.length){
        return false
    }
    
    for (let i of num1String){
        frequencies[i] = (frequencies[i]||0)+1
    }
    for(let j of num2String){
        if(!frequencies[j]){
            return false
        }
        frequencies[j] -= 1
    }
    return true
  }
  