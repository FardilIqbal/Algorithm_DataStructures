# Searching Algorithms
-Linear Search
    -Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want
    -Built in methods use linear search:
        -indexOf
        -includes
        -find
        -findIndex
    -Loop through entire array and check if the current array element is equal to the value, if it is, return the index at which the element is found
    -Time Complexity: O(n) (Worse & Average)

-Binary Search
    -Much faster form of search
    -Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
    -Only works on sorted arrays
    -Divide and Conquer
    -Time Complexity: O(log n) (Worse & Average Case)
-Naive String Search
 -