const reverseLinkedList = (node) => {
    let next = null
    let prev = null
    let curr = node

    while(curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

export const twinSum = (head) => {

    let slow = head
    let fast = head

    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let reversed = reverseLinkedList(slow)

    let maxSum = 0
    slow = reversed

    while (head && slow) {
        maxSum = Math.max(maxSum, head.val + slow.val)
        head = head.next
        slow = slow.next
    }

    reversed = reverseLinkedList(reversed)

    return maxSum;
}

/*
    Time:  O(n)
    Space: O(1)
 */