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
    expect(buildTree.left.left.right.value).toBe(3);
    newTree.delete(3);
    expect(buildTree.left.left.right).toBe(null);
    expect(buildTree.left.right.value).toBe(5);
    expect(newTree.delete(5).value).toBe(7);
    newTree.delete(5);
    expect(buildTree.left.right.value).toBe(7);
  })
})