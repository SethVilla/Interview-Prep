// Linked List Cycle III

// https://www.educative.io/courses/grokking-coding-interview-in-javascript/solution-linked-list-cycle-iii

export const countCycleLength = (head) => {

    let slow = head
    let fast = head

    while(fast?.next) {

        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {

            let count = 1
            slow = slow.next

            while (slow !== fast) {
                slow = slow.next
                count++
            }

            return count
        }
    }

    // Replace this placeholder return statement with your code
    return 0;
}

// Time complexity
// The time complexity of the algorithm is
// O(n), where nis the number of nodes in the linked list.

// Space complexity
// The space complexity of the algorithm above is
// O(1).