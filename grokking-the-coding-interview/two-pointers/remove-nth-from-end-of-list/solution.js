import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

function removeNthLastNode(head, n) {

    let slow = head;
    let fast = head;
    let prevNode = null;

    for (let i = 1; i <= n;i++) {
        fast = fast.next;
    }

    while (fast != null) {
        prevNode = slow;
        slow = slow.next
        fast = fast.next;
    }

    if (!prevNode) {
        head = head.next;
    } else {
        prevNode.next = prevNode.next.next;
    }

    // Replace this placeholder return statement with your code
    return head;
}
