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
 1. If a list is empty, return other list. If both are empty, return undefined
 2. Combine lists based on if one list has smaller val than the other list
 3. Return head of list with smaller val
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