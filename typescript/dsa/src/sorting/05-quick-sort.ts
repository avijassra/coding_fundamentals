/* ****************************************************
********************** Quick Sort *********************
Quick sort is a divide and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
*******************************************************
-- time complexity: O(n log n)
-- space complexity: O(log n)
-- stable: No
**************************************************** */
import { ISorter } from "../interfaces";
import { SortBase } from "./sort-base";

export class QuickSort extends SortBase implements ISorter {
    description: string = 'Quick Sort';

    protected _sortData = (arr: number[], sortAsc: boolean, pivotInd?: number): number[] => {
        // get the length of the array
        const len = arr?.length || 0;
        // check if the array is not empty
        if (len > 1) {
            pivotInd = pivotInd || len - 1;
            let swapInd = 0;

            for (let i = 0; i < len; i++) {
                if (i < swapInd) {
                    arr = this._swapNumbers(arr, i, swapInd);
                } else {
                    if (arr[i] > arr[pivotInd] && sortAsc) {
                        arr = this._swapNumbers(arr, i, swapInd);
                        swapInd++;
                    }
                }
            }
            const leftArr = arr.slice(0, pivotInd);
            const rightArr = arr.slice(pivotInd);

            return this._mergeSort(this._sortData(leftArr, sortAsc, leftArr.length - 2), this._sortData(rightArr, sortAsc), sortAsc);
        }

        return arr;
    }

    private _swapNumbers(arr: number[], ind1: number, ind2: number): number[] {
        const temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
        return arr;
    }

    protected _mergeSort = (leftArr: number[], rightArr: number[], sortAsc: boolean): number[] => { 
        const sortedArr: number[] = [];

        while(leftArr.length && rightArr.length) {
            if((leftArr[0] < rightArr[0] && sortAsc) || (leftArr[0] > rightArr[0] && !sortAsc)) {
                sortedArr.push(leftArr.shift() as number);
            } else {
                sortedArr.push(rightArr.shift() as number);
            }
        }

        return [...sortedArr, ...leftArr, ...rightArr];
    } 
}