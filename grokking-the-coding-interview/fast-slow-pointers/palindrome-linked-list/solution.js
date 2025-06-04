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


function inlinePalindrome(head){
    let slow = head
    let fast = head

    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let next = null
    let prev = null

    while (slow) {
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    slow = prev
    fast = head

    while (slow && fast) {
        if (slow.val !== fast.val) {
            return false
        }
        slow = slow.next
        fast = fast.next
    }



    slow = prev
    prev = null
    next = null

    while (slow) {
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    while(head) {
        console.log(head.val)
        head = head.next
    }


    // Replace this placeholder return statement with your code
    return true;
}
