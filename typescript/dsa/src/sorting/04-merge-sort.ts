/* ****************************************************
**************** Merge Sort ****************
Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
*******************************************************
-- time complexity: O(n log n)
-- space complexity: O(n) 
**************************************************** */
import { ISorter } from "../interfaces";
import { SortBase } from "./sort-base";

export class MergeSort extends SortBase implements ISorter {
    description: string = 'Merge Sort';

    protected _sortData = (arr: number[], sortAsc: boolean): number[] => {
        // get the length of the array
        const len = arr?.length || 0;
        // check if the array is not empty
        if (len > 1) {
            const minIndex = Math.floor(len / 2);
            const leftArr = arr.slice(0, minIndex);
            const rightArr = arr.slice(minIndex);

            // sort the left and right arrays
            return this._mergeSort(this._sortData(leftArr, sortAsc), this._sortData(rightArr, sortAsc), sortAsc);
        }

        // return the sorted array
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