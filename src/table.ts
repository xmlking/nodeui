import * as chalk from "chalk";

export class Table {
    constructor(public tableContent = '') {
    }

    // Adds a new table row to the output
    tr() {
        return this;
    };

    // Adds a new table cell to the output
    td(cellContent, cellWidth) {
        return this;
    }

    // Draw this table to the screen
    output() {
        return this;
    };


}
