import { ISorter } from "./interfaces";
import { BubbleSort } from "./sorting/01-bubble-sort";
import { SelectionSort } from "./sorting/02-selection-sort";
import { InsertionSort } from "./sorting/03-insertion-sort";

export class SortingFactory {
    getSortingQuestion: string = '1. Enter the sorting type (bubble/selection/insertion/merge/quick): ';

    getSorter(sortType: string): ISorter {
        let sorter: ISorter;
        switch (sortType) {
            case 'bubble':
                sorter = new BubbleSort();
                break;
            case 'selection':
                sorter = new SelectionSort();
                break;
            case 'insertion':
                sorter = new InsertionSort();
                break;
            // case 'merge':
            //     sorter = new MergeSort();
            //     break;
            // case 'quick':
            //     sorter = new QuickSort();
            //     break;
            default:
                sorter = new BubbleSort();
                break;
        }

        return sorter;
    }
}