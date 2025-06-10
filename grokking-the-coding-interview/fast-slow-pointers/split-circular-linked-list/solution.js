// Split a Circular Linked List

// https://www.educative.io/courses/grokking-coding-interview-in-javascript/split-a-circular-linked-list

/* Given a circular linked list, list, of positive integers, split it into two circular linked lists. The first circular linked list should contain the first half of the nodes (exactly ⌈list.length / 2⌉ nodes) in the same order they appeared in the original list, while the second circular linked list should include the remaining nodes in the same order.

    Return an array, answer, of length 2, where:
    - answer[0] is the head of the circular linked list representing the first half.
    - answer[1] is the head of the circular linked list representing the second half.

    Note: A circular linked list is a standard linked list where the last node points back to the first node.
 */

export const splitCircularLinkedList = (head) => {

    let slow = head
    let fast = head

    while (fast.next !== head && fast.next.next !== head) {
        slow = slow.next
        fast = fast.next.next
    }

    let start = head
    let mid = slow.next

    slow.next = start

    fast = mid

    while(fast.next !== head) {
        fast = fast.next
    }

    fast.next = mid

    // Replace the following placeholder return statement with your code
    return [start, mid]
}