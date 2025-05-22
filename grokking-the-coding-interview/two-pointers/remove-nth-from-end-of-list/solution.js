import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

/*
    constraints
    - the number of nodes in the list is k
    - 1 <= n <= k
 */

const removeNthLastNode = (head, n) => {

    let left = head
    let right = head

    for (let i = 0; i < n; i++) {
        right = right.next
    }

    // if we reach null it means to return the head
    if (!right) {
        return left.next
    }

    // stop before reaching the end in order to remove the required node
    while (right.next != null) {
        right = right.next
        left = left.next
    }

    left.next = left.next.next

    return head;
}
