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
    this.inOrderData = null;
    this.preOrderData = null;
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

    return rootNode;
  }
  insert(value) {
    let previousRoot;
    const currentRoot = this.root;
    const searchStatus = searchTree(currentRoot, value);

    function searchTree(root, value) {

      // value is attached to BST when a null value is found
      if (root === null) {
        const newNode = new Node(value);
        root = newNode;

        if (value < previousRoot.value) {
          previousRoot.left = root;
          return root;
        } else if (value > previousRoot.value) {
          previousRoot.right = root;
          return root;
        }
      }
      
      // return true if the value is already in the tree
      if (root.value === value) {
        return true;
      }
      
      // tree traversal
      if (value > root.value) {
        previousRoot = root;
        return searchTree(root.right, value);
      } 
      if (value < root.value) {
        previousRoot = root;
        return searchTree(root.left, value);
      }
    }

    return searchStatus;
  }
  delete(value) {
    let previousRoot;
    const currentRoot = this.root;
    const searchStatus = searchTree(currentRoot, value);

    function searchTree(root, value) {

      // base case
      if (root === null) {
        return 'value doesn\'t exist';
      }

      // delete sequence
      if (root.value === value) {

        // for when no children are present (delete node)
        if (root.left === null && root.right === null) {

          if (value < previousRoot.value) {
            previousRoot.left = null;
            return previousRoot;
          }
  
          if (value > previousRoot.value) {
            previousRoot.right = null;
            return previousRoot;
          }

        }

        // for when one child is present, child takes place of current node
        if (root.left === null || root.right === null) {

          if (root.left === null) {
            previousRoot.right = root.right;
            return previousRoot.right;
          }

          if (root.right === null) {
            previousRoot.left = root.left;
            return previousRoot.left;
          }

        }

        // for when two children are present, find the inorder successor by traversing down the right branch and then continuing down the left branch until the smallest value is found
        if (root.left !== null && root.right !== null) {
          previousRoot = root.right;
          const leftBranch = root.left;
          const rightBranch = root.right;
  
          let parentOfDeletedNode;
          while (previousRoot.left !== null) {
            if (previousRoot.left.left === null) {
              parentOfDeletedNode = previousRoot;
            }
            previousRoot = previousRoot.left;
          }

          // re-attaching branches after deletion
          root = previousRoot;
          root.left = leftBranch;
          root.right = rightBranch;
          parentOfDeletedNode.left = null;
          return root.value;
        }

      }

      // tree traversal
      if (value < root.value) {
        previousRoot = root;
        return searchTree(root.left, value);
      }
      if (value > root.value) {
        previousRoot = root;
        return searchTree(root.right, value);
      }
    }
    return searchStatus;
  }
  find(value) {
    const currentRoot = this.root;
    const searchStatus = searchTree(currentRoot, value);

    function searchTree(root, value) {

      // return status
      if (root === undefined || root === null) {
        return;
      }
      
      if (root.value === value) {
        return root;
      }

      // tree traversal
      if (value > root.value) {
        return searchTree(root.right, value);
      } 
      if (value < root.value) {
        return searchTree(root.left, value);
      }
    }
    return searchStatus
  }
  levelOrder(root) {
    const result = [];
    const que = [];

    // base case
    if (root === null) return;

    // level order traversal
    que.push(root);

    while (que.length !== 0) {
      let current =  que.shift();
      result.push(current.value);

      if (current.left !== null) que.push(current.left);
      if (current.right !== null) que.push(current.right);
    }
    return result;
  }
  inOrder(node, results = []) {
    if (!node) return [];
    if (node === null) return;

    this.inOrder(node.left, results);
    results.push(node.value);
    this.inOrder(node.right, results);

    this.inOrderData = results;
    return results;
  }
  preOrder(node, results = []) {
    if (!node) return [];
    if (node === null) return;

    results.push(node.value);
    this.preOrder(node.left, results);
    this.preOrder(node.right, results);

    this.preOrderData = results;
    return results;
  }
  postOrder() {
    
  }
}

module.exports = Tree;