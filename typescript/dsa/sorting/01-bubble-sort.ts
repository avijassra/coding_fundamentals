const srcArr = [34, 22, 54, 65, 21, 23, 43, 32, 12, 11, 2, 5, 3, 12, 62, 43, 54, 65, 76, 87, 98, 89, 78, 67, 56, 45, 34, 23, 12, 11, 10, 9, 7, 1, 4, 8, 2];
console.log(`Before sorting: ${srcArr}`);

const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length;
  let hasSwapped: boolean = true;
  for (let i = 0; i < len || hasSwapped; i++) {
    hasSwapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapped = true;
      }
    }
  }
  return arr;
};

const sortedArr = bubbleSort(srcArr);
console.log(`After sorting: ${sortedArr}`);