----
title: DZone Java Code Challenge Node Degrees
date: 2016-05-18 02:44:49
tags:
- Java
- Kotlin
----
[Java Code Challenge: Node Degreesa](https://dzone.com/articles/java-code-challenge-node-degrees)

##Challenge
In graph theory, the degree of a node is the number of edges coming into it or going out of it - how connected it is. For this challenge, you'll be calculating the degree of every node.

##Input Description
First, you'll be given an integer, N, on one line showing you how many nodes to account for. Next, you'll be given an undirected graph as a series of number pairs, a and b, showing that those two nodes are connected - an edge. Example:

``` bash
3 
1 2
1 3
```

Output Description
Your program should emit the degree for each node. Example:

``` bash
Node 1 has a degree of 2
Node 2 has a degree of 1
Node 3 has a degree of 1
```


先用Kotlin試寫一下
下面用Kotlin寫了一個簡單的代碼
有空再補充一下注解

```kotlin
fun main(args: Array<String>) {
    val buffer = IntArray(readLine()!!.toInt());
    var input = readLine();
    do {
        val intpus = input!!.split(' ');
        if (intpus[0].toInt() > 0 || intpus[0].toInt() <= buffer.size) {
            buffer[intpus[0].toInt() - 1]++;
        }
        if (intpus[1].toInt() > 0 || intpus[1].toInt() <= buffer.size) {
            buffer[intpus[1].toInt() - 1]++;
        }
        input = readLine();
    } while (input != "")
    for ((index, value) in buffer.withIndex()) {
        println("Node ${index + 1} has a degree of $value");
    }
}
```