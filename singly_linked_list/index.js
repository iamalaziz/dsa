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
            arr.forEach((element) => {
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
    // remove the node from the end
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
    // remove the node from the beginning
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
    // add a new node to the beginning
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
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    // add a node in into certain position
    insert(index, value) {
        if (index < 0 || index >= this.size) return false;

        if (index === this.size) {
            this.push(value);
            return true;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        let prevNode = this.get(index - 1);
        let newNode = new ListNode(value);
        let restOfNodes = prevNode.next;
        prevNode.next = newNode;
        newNode.next = restOfNodes;
        this.size++;
        return true;
    }
    // remove a node
    remove(index) {
        if (index < 0 || index >= this.size) return undefined;
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();
        let prev = this.get(index - 1);
        let curr = prev.next;
        prev.next = curr.next;
        this.size--;
        return curr;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        for (let i = 0; i < this.size; i++) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
    }
}
const n = new ListNode(5);
const list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.pop();
list.shift();
list.unshift(9);
list.set(1, 11);
list.insert(12, 3);
list.remove(1);
list.reverse();
list.print();
// const list2 = new SinglyLinkedList([1,2,3])
console.log(list);
