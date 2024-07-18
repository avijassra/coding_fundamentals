import { ISorting } from "./interfaces";
import { BubbleSort } from "./sorting/01-bubble-sort";
import * as readline from 'readline';


/* ****************************************************
*********************** Sorting ***********************
-- exe: tsc main.ts && node main.js
**************************************************** */

export class Main {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let sortType!: string;
        rl.question('Enter the sorting type (bubble/selection/insertion/merge/quick): ', (answer) => {
            sortType = answer.toLowerCase();
            rl.close();
        });

        let sortDirection!: string;
        rl.question('Enter the sorting direction (asc/desc): ', (answer) => {
            sortDirection = answer.toLowerCase();
            rl.close();
        });

        const srcArr = [34, 22, 54, 65, 21, 23, 43, 32, 12, 11, 2, 5, 3, 12, 62, 43, 54, 65, 76, 87, 98, 89, 78, 67, 56, 45, 34, 23, 12, 11, 10, 9, 7, 1, 4, 8, 2];
        console.log(`Before sorting: ${srcArr}`);

        const sorter: ISorting = this.resolveSortType(sortType || '');
        let sortedArr!: number[];

        if (sortDirection === 'desc') {
            sortedArr= sorter.sort(srcArr);
        } else {
            sortedArr = sorter.reverseSort(srcArr);
        }

        console.log(`After sorting (${sortDirection}): ${sortedArr}`);
    }

    resolveSortType(sortType: string): ISorting {
        let sorter: ISorting;

        switch (sortType) {
            case "bubble":
                sorter = new BubbleSort();
                break;

            default:
                sorter = new BubbleSort();
                break;
        }

        console.log(`Sorting type: ${sorter.description}`);

        return sorter;
    }
}

(() => new Main())();