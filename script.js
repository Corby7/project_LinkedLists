console.log("hoi");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = newNode;
    }
  }

  prepend(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      var oldHead = this.head;
      this.head = newNode;
      this.head.nextNode = oldHead;
    }
  }

  size() {
    let count = 0;
    let tmp = this.head;
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return this.head;
    }

    var tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.nextNode === null) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    const oldTailIndex = this.size() - 1;
    const newTailIndex = oldTailIndex - 1;

    while (currentIndex < newTailIndex) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    const poppedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    return poppedNode;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let currentIndex = 0;
    while (tmp !== null) {
      if (tmp.value === value) {
        return currentIndex;
      }
      currentIndex++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let result = "";
    while (tmp !== null) {
      result += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    const newNode = new Node(value);

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    let oldNode = currentNode;
    newNode.nextNode = oldNode;
    previousNode.nextNode = newNode;
    return;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
    return;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();
list.append(5);
list.append(7);
list.append(4);
list.prepend(2);

console.log(`Size of the list: ${list.size()}`);
console.log(`Head: ${list.getHead().value}`);
console.log(`Tail: ${list.getTail().value}`);
// console.log(`Node at Index: ${list.at(2).value}`);

console.log(list);
console.log(list.at(2));

list.pop();
console.log(`Size of the list: ${list.size()}`);
console.log(list);
console.log(list.contains(5));
console.log(list.find(4));
console.log(list.toString());

list.insertAt(100, 1);
console.log(list.toString());

list.removeAt(0);
list.removeAt(0);
console.log(list.toString());
