const insertionSort = (arr) =>{
    for(let i=1; i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0&& arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1] = numberToInsert
    }

}
const arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr)

//Time Complexity of O(n^2)
/*
Example: 
    Compare index 0 and index 1, if i0 > i1 then swap them
    Compare index 1 and index 2, if i1 > i2, swap them and compare the NEW i1 with i0, repeat last step
    ...
    Done
*/