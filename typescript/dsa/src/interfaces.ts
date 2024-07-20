export interface ISorter {
    description: string;

    sort(arr: number[]): number[];

    reverseSort(arr: number[]): number[];
}