/* ****************************************************
**************** Insertion Sort ****************
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
*******************************************************
-- time complexity: O(n^2)
-- space complexity: O(1)
**************************************************** */
import { ISorter } from "../interfaces";

export class InsertionSort implements ISorter {
    description: string = 'Insertion Sort';

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
            // check if the array is empty or has only one element
            let hasSwapped: boolean = true;
            // loop through the array
            for (let i = 0; i < len || hasSwapped; i++) {
                // set the flag to false
                hasSwapped = false;
                // loop through the array
                for (let j = 0; j < len - i - 1; j++) {
                    // check if the adjacent elements are in wrong order
                    if ((arr[j] > arr[j + 1] && sortAsc) || (arr[j] < arr[j + 1] && !sortAsc)) {
                        // swap the elements
                        const temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        // set the flag to true
                        hasSwapped = true;
                    }
                }
            }
        }

        // return the sorted array
        return arr;
    }
}