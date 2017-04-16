import * as chalk from "chalk";

export class Gauge {

    constructor(public value, public maxValue, public width, public dangerZone, public suffix) {

    }

    toString() {
        if (this.maxValue === 0) {
            return '[]';
        }
        else {
            let barLength = Math.ceil(this.value / this.maxValue * this.width);
            if (barLength > this.width)
                barLength = this.width;

            let barColor = chalk.green;
            if (this.value > this.dangerZone)
                barColor = chalk.red;

            return `[${barColor('|'.repeat(barLength))}${'-'.repeat(this.width + 1 - barLength)}] ${this.suffix}`;
        }
    }

}
