class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constuctor() {
    this.root = root;
  }
  buildTree(array) {

    // removes duplicate values
    const removedDuplicates = [];

    (function filteredArray() { 
      for (let i = 0; i < array.length; i++) {
       if (removedDuplicates.indexOf(array[i]) === -1) {
        removedDuplicates.push(array[i]);
       }
      }
    })();
    return removedDuplicates;
  }
}

const newTree = new Tree();
console.log(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

module.exports = Tree;