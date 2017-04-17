require('core-js/es7/symbol.js');
import * as chalk from 'chalk';
import * as os  from 'os';
import  {Banner, Gauge, Spinner, Sparkline, Progress, Line, LineBuffer} from './src/index'
require('draftlog').into(console);

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/********************/

const total = os.totalmem();
const free = os.freemem();
const used = total - free;
const human = Math.ceil(used / 1000000) + ' MB';
console.log('' + new Gauge(used, total, 20, total * 0.8, chalk.bold.grey(human)));

/********************/

const reqsPerSec = [10,12,3,7,12,9,23,10,9,19,16,18,12,12];

console.log(new Sparkline(reqsPerSec, 'reqs/sec').toString());

/********************/

const thisProgressBar = new Progress(20);
console.log(thisProgressBar.update(40, 100));

/********************/


const headers = new Line()
    .padding(2)
    .column('Column One', 20, [chalk.cyan])
    .column('Column Two', 20, [chalk.cyan])
    .column('Column Three', 20, [chalk.cyan])
    .column('Column Four', 20, [chalk.cyan])
    .fill()
    .output();

const body = new Line()
    .padding(2)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 20)
    .column((Math.random()*100).toFixed(3), 20)
    .fill()
    .output();



/********************/


const outputBuffer = new LineBuffer({
    x: 0,
    y: 0,
    width: 'console',
    height: 'console'
});

const message = new Line(outputBuffer)
    .column('Title Placehole', 20, [chalk.green])
    .fill()
    .store();

const blankLine = new Line(outputBuffer)
    .fill()
    .store();

const header = new Line(outputBuffer)
    .column('Suscipit', 20, [chalk.cyan])
    .column('Voluptatem', 20, [chalk.cyan])
    .column('Nesciunt', 20, [chalk.cyan])
    .column('Laudantium', 11, [chalk.cyan])
    .fill()
    .store();

let line;
for(let l = 0; l < 20; l++)
{
    line = new Line(outputBuffer)
        .column((Math.random()*100).toFixed(3), 20)
        .column((Math.random()*100).toFixed(3), 20)
        .column((Math.random()*100).toFixed(3), 20)
        .column((Math.random()*100).toFixed(3), 11)
        .fill()
        .store();
}

outputBuffer.output();

/********************/

const banner = new Banner('  Node UI is Awesome!    See what you can build with this module   ');

/********************/

async function* getProgressSlowly() {
    let progress = 0;

    while (progress <= 100) {
        await sleep(50);
        progress += Math.round(Math.random() * 5);
        if (progress >= 100) {
            yield 100;
        } else {
            yield progress;
        }
    }
}

async function startDownload() {
    // let progress = 0;
    // let myProgress = new Progress();
    // let myProgress = new Progress(50, chalk.green('Finished download!'), chalk.red('|'), '-');
    let myProgress = new Progress(50, chalk.green('Finished download!'));

    for await (let progress of getProgressSlowly()) {
        myProgress.update(progress, 100)
    }
}

(async () => {
    console.log('Starting downloads...');
    for (let i = 0; i < 10; i ++) {
        startDownload()
        // await sleep(100)
    }
})();


/********************/

const countdown = new Spinner('Exiting in 10 seconds...  ');

countdown.start(chalk.bgYellow.blue);

let number = 20;
setInterval(function () {
    number--;
    countdown.message = 'Exiting in ' + number + ' seconds...  ';
    if (number === 0) {
        process.stdout.write('\n');
        process.exit(0);
    }
}, 1000);

/********************/