const Tree = require('../binary-search');

describe('binary-search tree test', () => {

  let newTree;

  beforeEach(() => {
    newTree = new Tree();
  })

  it('makes tree', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toBeDefined();
  })

  it('filters out duplicate values', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toStrictEqual([1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324]);
  })
})