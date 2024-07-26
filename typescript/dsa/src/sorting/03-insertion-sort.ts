/* ****************************************************
**************** Insertion Sort ****************
Insertion Sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
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
                for(let j = i + 1; j > 0; j--) {
                    if((arr[j] < arr[j-1] && sortAsc) || (arr[j] > arr[j-1] && !sortAsc)) {
                        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                    } else {
                        break;
                    }
                }
            }
        }
    
        // return the sorted array
        return arr;
    }
}