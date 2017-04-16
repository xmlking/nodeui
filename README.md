Node UI
=======
Command Line UI components for Node.js

> This module is based on [clui](https://github.com/nathanpeck/clui) and [draftlog](https://github.com/ivanseidel/node-draftlog)
 
:: [Setup](#setup)
:: [Usage](#usage)
:: [Test](#test)
:: [Build](#build)

### Dependencies  

1. chalk
2. draftlog

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
import  {Spinner, Gauge, Sparkline, Progress, Line, LineBuffer} from 'nodeui'
(async () => {
    try {
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
ts-node examples.js
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