# Data Structures 
- Data Structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used
- Class
    - A blueprint for creating objects with pre-defined properties and methods
    - The method to create new objects must be called constructor
    - Class keyword creates a constant, so you can not redefine it

# Singly Linked Lists
- Data structure that contains a head, tail and length property
- Consists of nodes, and each node has a value and a pointer to another node or null
- Do not have indices
- Connected via nodes with a next pointer
- Random access is not allowed

# Doubly Linked List

# Hash Tables
- Used to store key-value pairs
- Keys are not ordered
- Fast for all of the following operations:
    - Finding Values
    - Adding new values
    - Removing values
- In order to look up values by keys, we need a way to convert keys into valid array indices
- Function that performs this is called a hash function
    - Needs to be fast (constant time)
    - Doesn't cluster outputs at specific indices, but distributes uniformly
    - Deterministic (Same input yields same output)
    