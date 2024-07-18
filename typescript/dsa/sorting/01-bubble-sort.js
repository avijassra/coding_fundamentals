// tsc 01-bubble-sort.ts && node 01-bubble-sort.js
var srcArr = [34, 22, 54, 65, 21, 23, 43, 32, 12, 11, 2, 5, 3, 12, 62, 43, 54, 65, 76, 87, 98, 89, 78, 67, 56, 45, 34, 23, 12, 11, 10, 9, 7, 1, 4, 8, 2];
console.log("Before sorting: ".concat(srcArr));
var bubbleSort = function (arr) {
    var len = arr.length;
    var hasSwapped = true;
    for (var i = 0; i < len || hasSwapped; i++) {
        hasSwapped = false;
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasSwapped = true;
            }
        }
    }
    return arr;
};
var sortedArr = bubbleSort(srcArr);
console.log("After sorting: ".concat(sortedArr));
