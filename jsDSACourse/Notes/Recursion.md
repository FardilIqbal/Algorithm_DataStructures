# Recursion
-What is Recursion?
    -A process(a function) that calls itself
-Call Stack:
    -Built in data structure that manages what happens when functions are invoked
    -Any time a function is invoked it is placed(pushed) on the top of the call stack
    -When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)
-Two Essential Parts of a Recursive Function
    -Base Case
    -Different Input (Change input to approach base case)
-Pitfalls
    -No Base Case
    -Forgetting to return or returning the wrong thing
-Helper Method Recursion
    -Outer functions that is not recursive calls inner function that IS recursive
-Pure Recursion
    -For Arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them
    -Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
    -To make copies of objects use Object.assign, or the spread operator