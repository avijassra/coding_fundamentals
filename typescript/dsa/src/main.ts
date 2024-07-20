import { ISorter } from "./interfaces";
import { SortingFactory as SorterFactory } from "./sorter.factory";
import * as readline from 'readline';


/* ****************************************************
*********************** Sorting ***********************
-- exe: tsc main.ts && node main.js
**************************************************** */

export class Main {
    constructor() {
        const factory = new SorterFactory();

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        let sortType!: string
        let sortDir!: string

        const question1 = () => {
            return new Promise<void>((resolve, reject) => {
                rl.question(`1. ${factory.getSortingQuestion} `, (answer) => {
                    sortType = answer.toLowerCase();
                    resolve()
                })
            })
        }

        const question2 = () => {
            return new Promise<void>((resolve, reject) => {
                rl.question('2. Enter the sorting direction (asc/desc): ', (answer) => {
                    sortDir = answer.toLowerCase();
                    resolve()
                })
            })
        }

        const questions = async () => {
            await question1()
            await question2()

            this.runSorting(factory.getSorter(sortType), sortDir);

            rl.close()
        }

        questions();
    }

    runSorting(sorter: ISorter, sortDirection: string): void {
        const srcArr = [34, 22, 54, 65, 21, 23, 43, 32, 12, 11, 2, 5, 3, 12, 62, 43, 54, 65, 76, 87, 98, 89, 78, 67, 56, 45, 34, 23, 12, 11, 10, 9, 7, 1, 4, 8, 2];
        console.log(`Before sorting: ${srcArr} | length: ${srcArr.length}`);

        let sortedArr!: number[];

        if (sortDirection === 'asc') {
            sortedArr = sorter.sort(srcArr);
        } else {
            sortedArr = sorter.reverseSort(srcArr);
        }

        console.log(`After using (${sorter.description} for ${sortDirection} order) to sort: ${sortedArr} | length: ${sortedArr.length}`);
    }
}

(() => new Main())();