# The Problem with Time
-Different Machines will record different times
-The same machine will record different times
-For fast algorithms, speed measurements may not be precise enough

# Counting Operations
-Count the number of operations (+,-,/,*)
-Focus on general trend (Does it grow in proportion with n? n^2? )

# Big O
-Way of formalized fuzzy counting
-It allows us to talk formally about how the runtime of an algorithms grows as the inputs grows
-We say that an algorithms is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
    -f(n) could be linear
    -f(n) could be quadratic (f(n)=n^2)
    -f(n) could be constant(f(n)=1)
    -And more!
-Nested loops -> O(n^2)
-Simplifying Big O Expressions
    - Constants Don't Matter (O(2n)->O(n))
    - Smaller Terms Don't Matter (O(n+10)->O(n))
    - Arithmetic Operations are Constant
    - Variable Assignments are Constant
    Accessing Elements in an array (by index) or object(by key) is constant
    -In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop
    -Certain searching algorithms have logarithmic time complexity
    -Efficient sorting algorithms involve logarithms
    -Recursion sometimes involves logarithmic space complexity
-Space Complexity
    -We can use big O notation to analyze space copmlexity: how much additional memory do we need to allocate in order to run the code in our algorithm
    -Will focus on auxiliary space complexity; to refer to space required by the algorithm, not including space taken up by the inputs
    - Most primitives(booleans, numbers, undefined, null) are constant space
    -Strings require O(n) space (where n is the string length)
    -Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
