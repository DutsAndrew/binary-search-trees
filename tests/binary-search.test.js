const Tree = require('../binary-search');

describe('binary-search tree test', () => {

  let newTree;

  beforeEach(() => {
    newTree = new Tree();
  })

  it('makes tree', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toBeDefined();
  })

  it('binary search tree is returned after filtering out dups and sorting list', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toBeDefined();
    const root = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    expect(root.value).toBe(8);
    expect(root.left.value).toBe(4);
    expect(root.left.left.value).toBe(1);
    expect(root.left.left.left).toBe(null);
    expect(root.left.right.value).toBe(5);
    expect(root.left.right.left).toBe(null);
    expect(root.left.right.right.value).toBe(7);
    expect(root.left.right.right.left).toBe(null);
    expect(root.left.right.right.right).toBe(null);
    expect(root.right.value).toBe(67);
    expect(root.right.left.value).toBe(9);
    expect(root.right.left.left).toBe(null);
    expect(root.right.left.right.value).toBe(23);
    expect(root.right.left.right.left).toBe(null);
    expect(root.right.left.right.right).toBe(null);
    expect(root.right.right.value).toBe(324);
    expect(root.right.right.left).toBe(null);
    expect(root.right.right.right.value).toBe(6345);
    expect(root.right.right.right.left).toBe(null);
    expect(root.right.right.right.right).toBe(null);
    newTree.root = root;
    expect(newTree.root.value).toBe(8);
  });
  
  it('insert(value) inserts a new value into binary search tree', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.insert(4)).toBe(true);
    expect(newTree.insert(6).value).toBe(6);
    newTree.insert(32);
    newTree.insert(45);
    expect(buildTree.right.left.right.right.value).toBe(32);
    expect(buildTree.right.left.right.right.right.value).toBe(45);
  });

  it('delete method of BST finds and deletes correct value without disrupting the tree', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.delete(390393)).toBe("value doesn't exist");
    expect(buildTree.left.left.right.value).toBe(3);
    newTree.delete(3);
    expect(buildTree.left.left.right).toBe(null);
    expect(buildTree.left.right.value).toBe(5);
    expect(newTree.delete(5).value).toBe(7);
    newTree.delete(5);
    expect(buildTree.left.right.value).toBe(7);
    expect(newTree.delete(8)).toBe(9);
    expect(buildTree.right.value).toBe(67);
  });

  it('find method returns the node on search if it exists, otherwise it returns false', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.find(1).value).toBe(1);
    expect(newTree.find(100)).toBe(undefined);
    expect(newTree.find(3).value).toBe(3);
    expect(newTree.find(7000)).toBe(undefined);
  });

  it('level order method returns an array of the level order of the BST', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.levelOrder(buildTree)).toStrictEqual([8, 4, 67, 1, 5, 9, 324, 3, 7, 23, 6345]);
  });

  it('inorder returns BST nodes in order of left, node, right', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    newTree.inOrder(buildTree);
    expect(newTree.inOrderData).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
    expect(newTree.inOrder(buildTree)).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
  });

  it('preorder returns BST nodes in order of left, node, right', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    newTree.preOrder(buildTree);
    expect(newTree.preOrderData).toStrictEqual([8,4,1,3,5,7,67,9,23,324,6345]);
    expect(newTree.preOrder(buildTree)).toStrictEqual([8,4,1,3,5,7,67,9,23,324,6345]);
  });

  it('postorder returns BST nodes in order of left, node, right', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    newTree.postOrder(buildTree);
    expect(newTree.postOrderData).toStrictEqual([3,1,7,5,4,23,9,6345,324,67,8]);
    expect(newTree.postOrder(buildTree)).toStrictEqual([3,1,7,5,4,23,9,6345,324,67,8]);
  });

  it('height method returns the height of the BST', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.height(buildTree)).toBe(4);
  });

  it('depth method returns the height of the BST', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.depth(buildTree)).toBe(4);
  });

  it('isBalanced method returns false if the left/right branches are larger than 1 in comparison to the other', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    expect(newTree.isBalanced(buildTree)).toBe(true);
  });

  // it('rebalance traverses bst in order and creates a new array, it then rebuilds it', () => {
  //   const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  //   newTree.root = buildTree;
  //   expect(newTree.reBalance(buildTree)).toEqual({"left": {"left": {"left": null, "right": {"left": null, "right": null, "value": 3}, "value": 1}, "right": {"left": null, "right": {"left": null, "right": null, "value": 7}, "value": 5}, "value": 4}, "right": {"left": {"left": null, "right": {"left": null, "right": null, "value": 23}, "value": 9}, "right": {"left": null, "right": {"left": null, "right": null, "value": 6345}, "value": 324}, "value": 67}, "value": 8});
  // });

  it('Tree class driver test that runs through and utilizes the above methods together', () => {
    const buildTree = newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
    newTree.root = buildTree;
    newTree.insert(450);
    newTree.insert(550);
    newTree.insert(650);
    expect(newTree.isBalanced(buildTree)).toBe(false);
    expect(newTree.inOrder(buildTree)).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 450, 550, 650, 6345]);
    const reBalancedTree = newTree.reBalance(buildTree);
    newTree.root = reBalancedTree;
    expect(newTree.isBalanced(reBalancedTree)).toBe(true);
  });
})