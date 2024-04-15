class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(arr) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach(element => {
                this.unshift(element);
            });
        }
    }
    isEmpty() {
        return this.size === 0;
    }
    push(val) {
        let newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        if (this.size == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let secondNode = this.head.next;
        this.head = secondNode;
        this.size--;
        if (this.size == 0) {
            this.tail = null;
        }
        return secondNode;
    }
    unshift(val) {
        let newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.size) return null;
        let counter = 0;
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
}
const n = new ListNode(5);
const list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.pop();
list.shift();
list.unshift(9);

const list2 = new SinglyLinkedList([1,2,3])
console.log(list2);
