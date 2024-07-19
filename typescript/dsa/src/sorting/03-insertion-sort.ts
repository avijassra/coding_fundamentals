/* ****************************************************
**************** Insertion Sort ****************
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
*******************************************************
-- time complexity: O(n^2)
-- space complexity: O(1)
**************************************************** */
import { ISorter } from "../interfaces";
import { SortBase } from "./sort-base";

export class InsertionSort extends SortBase implements ISorter {
    description: string = 'Insertion Sort';

    protected _sortData = (arr: number[], sortAsc: boolean): number[] => {
        // get the length of the array
        const len = arr?.length || 0;
        // check if the array is not empty
        if (len > 0) {
            // loop through the array
            for (let i = 0; i < len; i++) {
                let minIndex = this._findMinMaxIndex(arr, i, len, sortAsc);
                if (minIndex !== i) {
                    // swap the elements
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                }
            }
        }
    
        // return the sorted array
        return arr;
    }
    
    protected _findMinMaxIndex = (arr: number[], startIndex: number, endIndex: number, sortAsc: boolean): number => {
        let minIndex = startIndex;
        // loop through the array
        for (let j = startIndex + 1; j < endIndex; j++) {
            // check if the adjacent elements are in wrong order
            if ((arr[minIndex] > arr[j] && sortAsc) || (arr[minIndex] < arr[j] && !sortAsc)) {
                // update the minIndex
                minIndex = j;
            }
        }
        return minIndex;
    }
}