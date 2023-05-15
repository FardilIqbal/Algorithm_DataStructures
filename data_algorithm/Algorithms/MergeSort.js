//Time Complexity O(n*log(n))

const mergeSort = (arr) =>{
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr= arr.slice(0,mid) //[8,20,-2]
    const rightArr = arr.slice(mid) //[4,-6]

    return merge(mergeSort(leftArr),mergeSort(rightArr))
    /*
    [8,20],[-2]
    [8],[20]
    MERGE -> 
        [8,20]
    MERGE -> 
        [-2,8,20]
    [4],[-6]
    MERGE ->
        [-6,4]
    MERGE ->
        [-6,-2,4,8,20]

    */

}

const merge = (leftArr,rightArr)=>{
    const sortedArr = []
    let i = 0;
    let j = 0
    while(i < leftArr.length&& j < rightArr.length){
        if(leftArr[i]<=rightArr[j]){
            sortedArr.push(leftArr[i])
            i++
        }else{
            sortedArr.push(rightArr[j])
            j++
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr))