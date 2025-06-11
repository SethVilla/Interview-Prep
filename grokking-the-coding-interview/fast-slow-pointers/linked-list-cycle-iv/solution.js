// Linked List Cycle IV

// https://www.educative.io/courses/grokking-coding-interview-in-javascript/linked-list-cycle-iv

/*
Given the head of a singly linked list, implement a function to detect and remove any cycle present in the list. A cycle occurs when a node's next pointer links back to a previous node, forming a loop within the list.

The function must modify the linked list in place, ensuring it remains acyclic while preserving the original node order. If no cycle is found, return the linked list as is.
 */



const removeCycle = (head) => {

    let slow = head
    let fast = head

    while(fast?.next) {
        slow = slow.next
        fast = fast.next.next

        if (fast === slow) {
            break
        }
    }

    if (!fast?.next) {
        return head
    }

    slow = head

    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }


    while (fast?.next !== slow) {
        fast = fast.next
    }

    fast.next = null

    return head;
}

// Time complexity
// The time complexity of the algorithm is O(n), where
// n is the number of nodes in the linked list.
//
// Space complexity
// The space complexity of the algorithm above is
// O(1).