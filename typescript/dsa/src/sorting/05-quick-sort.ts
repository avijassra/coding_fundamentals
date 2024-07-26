/* ****************************************************
**************** Quick Sort ****************
quick sort is a divide and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
*******************************************************
-- time complexity: O(n log n)
-- space complexity: O(log n)
**************************************************** */
import { ISorter } from "../interfaces";
import { SortBase } from "./sort-base";

export class QuickSort extends SortBase implements ISorter {
    description: string = 'Quick Sort';

    protected _sortData = (arr: number[], sortAsc: boolean): number[] => {
        throw new Error("Method not implemented.");
    }
}