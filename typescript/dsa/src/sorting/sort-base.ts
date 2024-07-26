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