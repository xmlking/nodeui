Node UI
=======
Command Line UI components for Node.js

> This module is based on [clui](https://github.com/nathanpeck/clui) and [draftlog](https://github.com/ivanseidel/node-draftlog)
 
:: [Setup](#setup)
:: [Usage](#usage)
:: [Test](#test)
:: [Build](#build)

### Setup
> Installing this module in your project
```bash
yarn add nodeui
# or via npm
npm install nodeui
```

### Usage 
```ts
import * as chalk from 'chalk';
import  {Banner, Gauge, Spinner, Sparkline, Progress, Line, LineBuffer} from 'nodeui'
(async () => {
    try {
        const banner = new Banner('  Node UI is Awesome!    See what you can build with this module   ');
    
        let spinner = new Spinner('initial message');
        spinner.start();
        await sleep(800);
        spinner.message = 'still working...';
        await sleep(800);
        spinner.message = 'almost done...';
        await sleep(800);
        spinner.stop()
    } catch (err) {
        console.log('Error:::', err)
    }
})();
```

```ts
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
    let myProgress = new Progress(50, chalk.green('Finished download!'));

    for await (let progress of getProgressSlowly()) {
        myProgress.update(progress, 100)
    }
}

(async () => {
    console.log('Starting downloads...');
    for (let i = 0; i < 10; i ++) {
        startDownload()
    }
})();
```

## Developer Setup

### Setup
```bash
yarn
```

### Build
```bash
yarn run build
```
### Examples
```bash
# ts-node examples.js
ts-node --disableWarnings  examples.ts
```

### Test
```bash
yarn run test
```

### Publish
```bash
yarn run prepublishOnly
cd dist
npm publish
```
