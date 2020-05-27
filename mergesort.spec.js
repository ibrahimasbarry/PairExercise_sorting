describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });
  it('is able to split an uneven array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,5,9,11], [2,3,6])).toEqual([1,2,3,5,6,9,11]);
  });
});

describe('MergeSort function', function(){
  it('is able take an unsorted array, and return a sorted array', function(){
    expect(mergeSort([4,8,2,6,1,12,5])).toEqual([1,2,4,5,6,8,12]);
  });
});