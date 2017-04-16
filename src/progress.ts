import * as chalk from "chalk";

export class Progress {
    private draft: any;
    constructor(public width = 50, public suffix = '', private filled = chalk.blue('='), private empty = ' ') {
        this.draft = console.draft();
    }

    update(currentValue, maxValue) {
        let bar = Math.ceil(currentValue / maxValue * this.width);
        if(bar > this.width) bar = this.width;
        const display = chalk.dim('[') + this.filled.repeat(bar) + this.empty.repeat(this.width  - bar) + chalk.dim('] ') + chalk.yellow(Math.ceil(currentValue / maxValue * 100) + '%');
        if(bar < this.width) {
            this.draft(display);
        } else {
            this.draft(display, this.suffix);
        }
    }
}
