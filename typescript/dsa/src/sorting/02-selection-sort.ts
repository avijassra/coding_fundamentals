/* ****************************************************
**************** Selection Sort ****************
Selection Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
*******************************************************
-- time complexity: O(n^2)
-- space complexity: O(1)
**************************************************** */
import { ISorter } from "../interfaces";

export class SelectionSort implements ISorter {
    description: string = 'Selection Sort';

    sort = (arr: number[]): number[] => {
        // sort the array in ascending order
        return this._sortData(arr, true);
    };

    reverseSort(arr: number[]): number[] {
        // sort the array in descending order
        return this._sortData(arr, false);
    }

    private _sortData = (arr: number[], sortAsc: boolean): number[] => {
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
    
    private _findMinMaxIndex = (arr: number[], startIndex: number, endIndex: number, sortAsc: boolean): number => {
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