# Built in Data Structures (Through the lens of Big O)

# The Big O of Objects
-When to use objects
    -When you don't need order
    -When you need fast access / insertion and removal
    -Insertion: O(1)
    -Removal: O(1)
    -Searching: O(n)
    -Access: O(1)
-Big O of Object Methods
    -Object.keys: O(n)
    -Object.values: O(n)
    -Object.entries: O(n)
    -hasOwnProperty: O(1)
# Big O of Arrays
-Ordered Lists
-Use when you need order
-Insertion: Depends
    -Appending(push): O(1)
    -Prepending: O(n)
-Removal: Depends
    -From End(pop): O(1)
    -From Start: O(n)
-Searching: O(n)
-Access: O(1)
-Array Methods
    -push: O(1)
    -pop: O(1)
    -shift: O(n)
    -unshift: O(n)
    -concat: O(n)
    -slice: O(n)
    -splice: O(n)
    -sort: O(n*log(n))
    -forEach/map/filter/reduce/etc.: O(n)