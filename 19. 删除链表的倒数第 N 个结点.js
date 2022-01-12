// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  输入：head = [1], n = 1
  输出：[]

  输入：head = [1,2], n = 1
  输出：[1]
 */

/**
 * 模式识别：删除倒数第几个：双指针：快慢指针
 * fast和slow
 * fast 先走 n+1 步，之后 fast和slow 一起走，直到 fast 到了null，那么此时 slow 所指的位置即为倒数第n个
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
  let lnode = new ListNode(0, head);
  let slow = fast = lnode;
  for(let i=0; i<n; i++) {
    fast = fast.next;
  }
  if(!fast) return lnode.next;
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  };
  slow.next = slow.next.next;
  return lnode.next;
};

let res = removeNthFromEnd([1,2,3,4,5],2)
console.log(res);