function split(wholeArray) {
  const numElements = wholeArray.length;

  // firstHalf takes the extra element given an odd numbered elements wholeArray
  const firstHalf = wholeArray.slice(0, Math.ceil(numElements/2));
  const secondHalf = wholeArray.slice(Math.ceil(numElements/2));

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const mergedArray = [];

  while(arr1.length || arr2.length) {
      if (!arr1.length) mergedArray.push(arr2.shift());
      else if (!arr2.length) mergedArray.push(arr1.shift());

      else {
        if (arr1[0] > arr2[0]) mergedArray.push(arr2.shift())
        else mergedArray.push(arr1.shift());
      }
  }

  return mergedArray;
}

function mergeSort(array) {
  /* your code here */
  // Base condition
  if (array.length === 1 || array.length === 0) return array;

  //keep splitting it until it's elements of 1
  //keep merging them until you get your full array back

  const [firstHalf, secondHalf] = split(array);
  const mergedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf));

  return mergedArray;
}