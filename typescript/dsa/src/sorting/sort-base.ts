/* ****************************************************
**************** Insertion Sort ****************
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
*******************************************************
-- time complexity: O(n^2)
-- space complexity: O(1)
**************************************************** */
import { ISorter } from "../interfaces";

export abstract class SortBase implements ISorter {
    abstract description: string;

    sort = (arr: number[]): number[] => {
        // sort the array in ascending order
        return this._sortData(arr, true);
    };

    reverseSort(arr: number[]): number[] {
        // sort the array in descending order
        return this._sortData(arr, false);
    }

    protected abstract _sortData(arr: number[], sortAsc: boolean): number[];
}