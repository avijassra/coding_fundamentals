import { ISorting } from "./interfaces";
import { BubbleSort } from "./sorting/01-bubble-sort";

/* ****************************************************
*********************** Sorting ***********************
-- exe: tsc main.ts && node main.js
**************************************************** */

const srcArr = [34, 22, 54, 65, 21, 23, 43, 32, 12, 11, 2, 5, 3, 12, 62, 43, 54, 65, 76, 87, 98, 89, 78, 67, 56, 45, 34, 23, 12, 11, 10, 9, 7, 1, 4, 8, 2];
console.log(`Before sorting: ${srcArr}`);

const sort: ISorting = new BubbleSort();

const sortedArr = sort.sort(srcArr);
console.log(`After sorting: ${sortedArr}`);