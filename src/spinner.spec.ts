import * as chalk from 'chalk';
import {Spinner} from "./spinner";

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Spinner', () => {

    let spinner: Spinner;

    beforeEach(function(done) {
        // require('yargs').argv.serve ? require('draftlog').into(console, true) : require('draftlog').into(console);
        require('draftlog').into(console);
        spyOn(console, 'log');
        spinner = new  Spinner('initial text');
        done();
    });

    it('should have initial message', () => {
        expect(spinner.message).toEqual('initial text');
    });

    it('should log 25 times', async (done) => {
        spinner.start();
        await sleep(800);
        spinner.message = 'next message';
        await sleep(800);
        spinner.message = 'almost done...';
        await sleep(800);
        spinner.stop();
        expect(console.log).toHaveBeenCalledTimes(25);
        done()
    });

});