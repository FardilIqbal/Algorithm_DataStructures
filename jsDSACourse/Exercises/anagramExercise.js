//Given Two Strings, write a function to determine if the second string is an anagram of the first.
//Frequency Counter Example
function validAnagram(word1,word2){
    // add whatever parameters you deem necessary - good luck!
    if(word1.length != word2.length){
        return false
    }
    
    let letters1 = {}
    let letters2 = {}
    for(let i of word1){
        letters1[i] = (letters1[i] || 0) + 1
    }
    for(let j of word2){
        letters2[j] = (letters2[j] || 0) + 1 
    }
    for(let k in letters2){
        if(!letters1[k]){
            return false
        }
        if(letters1[k] != letters2[k]){
            return false
        }
    }
    return true
    
  }