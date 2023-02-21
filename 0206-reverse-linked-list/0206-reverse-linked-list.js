/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 1. have a temp variable that loops through the linked list
 2. create a next variable that tracks node after temp
 3. create a prev variable that tracks node before temp
 4. for loop
 5. set next = temp.next pointer
 6. set temp.next pointer = prev
 7. set prev = temp
 8  set temp = next
 9. return prev, which is now the head of the reversed linked list
 */
var reverseList = function(head) {
    let temp = head
    let next = null
    let prev = null
    for (let i = 0; temp; i++) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
    return prev
};
