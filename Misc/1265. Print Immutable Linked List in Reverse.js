/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *   https://leetcode.com/problems/print-immutable-linked-list-in-reverse/description/
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */

 
var printLinkedListInReverse = function(head) {
    let storing = [];
    let current = head;
    while (current !== null) {
        storing.push(current);
        current = current.getNext();
    }
    for(let i = storing.length - 1; i>=0; i--) {
        storing[i].printValue();
    }
};
/*
// Recursive
var printLinkedListInReverse = function(head) {
    if(head) {
        printLinkedListInReverse(head.getNext());
        head.printValue();
    }
}
*/
