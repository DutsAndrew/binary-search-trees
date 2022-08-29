const Tree = require('../binary-search');

describe('binary-search tree test', () => {

  let newTree;

  beforeEach(() => {
    newTree = new Tree();
  })

  it('makes tree', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toBeDefined();
  })

  it('filters out duplicate values and sorts list', () => {
    expect(newTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
  })
})