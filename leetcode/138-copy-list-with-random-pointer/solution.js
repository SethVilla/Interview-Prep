/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
const copyRandomList = (head)  => {

    if (!head) {
        return null
    }

    let curr = head
    while (curr) {
        const newNode = new _Node(curr.val, null, null);
        newNode.next = curr.next
        curr.next = newNode
        curr = newNode.next
    }

    curr = head

    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next
        }
        curr = curr.next.next
    }

    curr = head
    let newHead = head.next

    while (curr) {
        let copy = curr.next
        curr.next = copy.next

        if (copy.next) {
            copy.next = copy.next.next
        }

        curr = curr.next
    }


    return newHead

};