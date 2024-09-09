/* ****************************************************
**************** Quick Sort ****************
quick sort is a divide and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
*******************************************************
-- time complexity: O(n log n)
-- space complexity: O(log n)
**************************************************** */
import { ISorter } from "../interfaces";
import { SortBase } from "./sort-base";

export class BucketSort extends SortBase implements ISorter {
    description: string = 'Bucket Sort';

    protected _sortData = (arr: number[], sortAsc: boolean, pivotInd?: number): number[] => {
        let counter: number[] = [];

        for (let a of arr) {
            counter[a] = (counter[a] || 0) + 1;
        }

        let arrInd = (sortAsc ? 0 : arr.length - 1);
        for (let i = 0; i < counter.length; i++) {
            if (counter[i]) {
                for (let j = 0; j < counter[i]; j++) {
                    if (sortAsc) {
                        arr[arrInd + j] = i;
                    } else {
                        arr[arrInd - j] = i;
                    }
                }

                if (sortAsc) {
                    arrInd += counter[i];
                } else {
                    arrInd -= counter[i];

                }
            }
        }

        return arr;
    }
}