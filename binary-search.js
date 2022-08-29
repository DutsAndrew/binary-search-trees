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
    const filteredStatus = filteredArray(array);
    const mergedStatus = mergeSort(filteredStatus);

    // removes duplicate values
    function filteredArray(array) { 
      const removedDuplicates = [];

      for (let i = 0; i < array.length; i++) {
       if (removedDuplicates.indexOf(array[i]) === -1) {
        removedDuplicates.push(array[i]);
       }
      }

      return removedDuplicates;
    }

    // merge sort to sort array
    function mergeSort(array) {
      const sortedArray = [];
      if (array.length === 1) return array;
    
      // divide
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
    return mergedStatus;
  }
}

const newTree = new Tree();
console.log(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

module.exports = Tree;