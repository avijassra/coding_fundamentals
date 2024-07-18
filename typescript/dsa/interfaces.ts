export interface ISorting {
    description: string;

    sort(arr: number[]): number[];

    reverseSort(arr: number[]): number[];
}