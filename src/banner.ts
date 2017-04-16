import * as chalk from "chalk";
import {ChalkChain} from "chalk";

export class Banner {

    constructor(public text, color: ChalkChain = chalk.yellow) {
        const words = text.split('');
        console.log(chalk.dim('*'.repeat(words.length)));
        const update = console.draft();
        console.log(chalk.dim('*'.repeat(words.length)));

        setInterval( () => {
            words.push(words.shift());
            update(color(words.join('')));
        }, 100)
    }
}