// middle of linked list
// head of a single linked list
// return the middle node of the linked list
// if the number is even there will 2 middle nodes return the second


// constraints n number of nodes  1 and 100
// node val 1 & 100
// head != null

export const getMiddleNode = (head) => {
    let slow = head
    let fast = head

    while (fast) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow

}


