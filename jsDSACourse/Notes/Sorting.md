# Sorting Algorithms
-Process of regarranging the items in a collection so that the items are in some kind of order
-

# Bubble Sort
- A sorting algorithm where the largest values bubble up to the top
- Start looping with a variable called i, the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i-1
- if arr[j] is greater than arr[j+1], swap those two values!
- Time Complexity: O(n^2)
- Space Complexity: O(1)

# Selection Sort
- Instead of first placing large values into sorted position, it places small values into sorted position
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- Time Complexity: O(n^2)
- Space Complexity: O(1)

# Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted
- Start by picking the second element in the array 
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, itereate through the sorted portion to place the element in the correct place
- Time Complexity: O(n^2)
- Space Complexity: O(1)

# Merge Sort
- Works by decomposing an arry into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- Useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it
- Time Complexity: O(n log n)
- Space Complexity: O(n)

# Quick Sort
- Works by selecting one element (called the "pivot" and finding the index where the pivot should end up in the sorted array)
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
-Time Complexity: Best:O(n log n) Worst: O(n^2)
- Space Complexity: O(log n)

# Radix Sort
- Special Sorting algorithm that works on lists of numbers
- Never makes comparisons between elements
- Exploits the fact that information about the size of a number is encoded in the number of digits
- Time Complexity: O(nk) (k = # of digits)
- Space Complexity: O(n + k)