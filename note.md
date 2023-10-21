- n(logn) 
    Visits all nodes (logn) amount of time.

## Depth-First Insert
```

insert(node,v)
    if node.v < v
        insert(node.r,v)
        if !node.r
            insertion
    elseif node.v >= v
        insert(node.l,v)

```

## Depth-First Delete

## Binary Search Tree Q&A
- Insertion unbalances the tree

## Heap (Priority Queue)
It is a binary tree where every child and grandchild is smaller (MaxHeap), or lager (MinHeap) than the current node.

- Whenever a node is added, we must adjust the tree
- Whenever a node is deleted, we must adjust the tree
- There is no traversing the tree. 

A heap is always complete.

### Some cool characteristic
- It is self balancing
- It can be used for priority

## Heap Implementation

## Trie (If its not a priority queue, its a trie )
Think of auto-complete.


## Graphs
