class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constuctor() {
    this.root = null;
  }
  buildTree(array) {
    const filteredArr = filteredArray(array);
    const sortedArr = mergeSort(filteredArr);
    const rootNode = createBST(sortedArr, 0, sortedArr.length - 1);
    // const logOutBSTree = logBST(arrayToBinarySearchTree);

    function filteredArray(array) { 
      const removedDuplicates = [];

      for (let i = 0; i < array.length; i++) {
       if (removedDuplicates.indexOf(array[i]) === -1) {
        removedDuplicates.push(array[i]);
       }
      }

      return removedDuplicates;
    }

    function mergeSort(array) {
      const sortedArray = [];
      if (array.length === 1) return array;
    
      const midPoint = Math.floor(array.length / 2);
      const arrayLeft = mergeSort(array.slice(0, midPoint));
      const arrayRight = mergeSort(array.slice(midPoint));
    
      while (arrayLeft.length > 0 && arrayRight.length > 0) {
        if (arrayLeft[0] < arrayRight[0]) {
          sortedArray.push(arrayLeft[0]);
          arrayLeft.shift();
        } else {
          sortedArray.push(arrayRight[0]);
          arrayRight.shift();
        }
      }
    
      if (arrayLeft.length > 0) {
        sortedArray.push(...arrayLeft);
      } else if (arrayRight.length > 0) {
        sortedArray.push(...arrayRight);
      }

      return sortedArray;
    }

    function createBST(array, start, end) {
      if (start > end) return null;

      const midPoint = parseInt((start + end) / 2);
      const node = new Node(array[midPoint]);

      let rootNodeSet = false;
      let rootNode = null;

      if (rootNodeSet === false) {
        rootNode = node;
      }

      node.left = createBST(array, start, midPoint - 1);
      node.right = createBST(array, midPoint + 1, end);

      return rootNode;
    }
    
    // function logBST(node) {
    //   if (node == null)
    //   {
    //       return;
    //   }
    //   console.log(node.value + " ");
    //   logBST(node.left);
    //   logBST(node.right);
    // }

    return rootNode;
  }
  insert(root, value) {
    if (root === false) root = this.root;
    if (root === null || root.value === value) {
      return root.value;
    }
    
    if (root.value < value) {
      return this.insert(root.right, value);
    }

    return this.insert(root.left, value);
  }
}

module.exports = Tree;