// 2130. Maximum Twin Sum of a Linked List

// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/


// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
//
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
//
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

const reverseNodeList = (node) => {

    let next = null
    let prev = null
    let curr = node

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev

}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = (head) => {
    let slow = head
    let fast = head

    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let reversed = reverseNodeList(slow)

    let maxSum = 0
    slow = head
    fast = reversed

    while (slow && fast) {
        maxSum = Math.max(maxSum, slow.val + fast.val)
        slow = slow.next
        fast = fast.next
    }

    reverseNodeList(reversed)

    return maxSum
};