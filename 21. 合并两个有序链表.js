// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let output = new ListNode(0,null);
  while(list1&&list2) {
    if(list1.val<=list2.val) {
      let newnode = new ListNode(list1.val,null);
      output.next = newnode;
      list1 = list1.next;
    } else {
      let newnode = new ListNode(list2.val,null);
      output.next = newnode;
      list2 = list2.next;
    }
  }
  while(list1) {
    let newnode = new ListNode(list1.val,null);
    output.next = newnode;
    list1 = list1.next;
  }
  while(list2) {
    let newnode = new ListNode(list2.val,null);
    output.next = newnode;
    list2 = list2.next;
  }
  output = output.next;
  return output;
};

// 递归
var mergeTwoLists = function(list1, list2) {
  if(list1 === null){
      return list2;
  }
  if(list2 === null){
      return list1;
  }
  if(list1.val < list2.val){
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  }else{
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
  }
};