/* ****************************************************
********************* Bucket Sort *********************
Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
*******************************************************
-- time complexity: O(n)
-- space complexity: 1
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