/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let current = new ListNode();
    let head = current;
    let p1= l1, p2 = l2;
    
    while(p1 && p2) {
        if (p1.val > p2.val) {
            current.next = p2;
            p2 = p2.next;
            current = current.next
        } else {
            current.next = p1;
            p1 = p1.next;
            current = current.next
        }
    }
    if (p1)
        current.next = p1;
    if(p2)
        current.next = p2;
    return head.next;
};