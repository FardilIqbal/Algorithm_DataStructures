//Time Complexity: O(n*log(n))


// const quickSort = (arr) =>{
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]//pivot = -6
//     let left = []
//     let right = []
//     for (let i = 0; i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])//FIRST ITERATION OF quickSort: []
//         }else{
//             right.push(arr[i])//FIRST ITERATION OF quickSort: [8,20,-2,4]
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
    
// }

// const arr = [8,20,-2,4,-6]

// console.log(quickSort(arr))

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr;



}

function pivot(arr, start=0,end=arr.length+1){
    function swap(array,i,j){
        var temp = array[i]
        array[i]=array[j]
        array[j] = temp
    }
    var pivot = arr[start]
    var swapIdx = start
    for(var i=start+1; i<arr.length; i++){
        if(pivot>arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
        }
        swap(arr,start,swapIdx)
    }
}
