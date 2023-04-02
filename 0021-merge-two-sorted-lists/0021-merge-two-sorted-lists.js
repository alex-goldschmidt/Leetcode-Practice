/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 1. write edge cases of if a list is empty or both lists are empty
 2. if a list's val < other list's val
            list.next = mergeTwoLists(list.next, other list)
            return list
 3. else, a list's val < other list's val
            list.next = mergeTwoLists(list.next, other list)
            return list          
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    if (!list1 && !list2) return undefined
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};