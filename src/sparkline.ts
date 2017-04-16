import * as chalk from "chalk";


const sparklineSymbols = [
    '\u2581',
    '\u2582',
    '\u2583',
    '\u2584',
    '\u2585',
    '\u2586',
    '\u2587',
    '\u2588'
];
export class Sparkline {

    constructor(public points, public suffix = '') {
    }

    toString() {
        let max = Math.max.apply(Math, this.points);

        let scaledSequence = this.points.map(function (thisPoint) {
            if(max === 0)
                return [0, 0];
            else if(thisPoint === 0)
                return [0, 0];
            else
                return [
                    Math.ceil(thisPoint / max * (sparklineSymbols.length-1)),
                    thisPoint
                ];
        });

        let sparklineGraph = '';
        let alreadyDrawnMax = false;
        scaledSequence.forEach(function (symbolNumber) {
            if(symbolNumber[1] == max && !alreadyDrawnMax)
            {
                sparklineGraph += chalk.green(sparklineSymbols[symbolNumber[0]]);
                alreadyDrawnMax = true;
            }
            else
                sparklineGraph += sparklineSymbols[symbolNumber[0]];
        });

        return sparklineGraph + '  ' + chalk.black.bold(this.points[this.points.length-1] + this.suffix + ' (') + chalk.green(max + this.suffix) + chalk.black.bold(')');

    }
}