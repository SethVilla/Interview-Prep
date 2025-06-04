function reverseLinkedList(slowPtr) {
    let prev = null, next = null,
        curr = slowPtr;

    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function compareTwoHalves(firstHalf, secondHalf) {

    while (firstHalf !== null && secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        } else {
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }
    }
    return true;
}

const palindrome = (head) => {
    let fast = head, slow = head

    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

}

/*
    Time: O(n)
    Space: O(1)
 */
