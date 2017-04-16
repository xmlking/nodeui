import * as chalk from 'chalk';
import {Gauge} from "./gauge";

describe('Gauge', () => {

    let gauge: Gauge;

    beforeEach(function(done) {
        const total = 2000;
        const free = 500;
        const used = total - free;
        const human = used + ' MB';
        gauge = new  Gauge(used, total, 20, total * 0.8, chalk.bold.grey(human));
        done();
    });

    it('when value is less then dangerZone, it should be green', () => {
        let expected = `[${chalk.green('|'.repeat(15))}${'-'.repeat(6)}] ${chalk.bold.grey('1500 MB')}`;
        expect(gauge.toString()).toEqual(expected);
    });

    it('when value is more then dangerZone, it should be red', () => {
        gauge.value = 1800;
        let expected = `[${chalk.red('|'.repeat(18))}${'-'.repeat(3)}] ${chalk.bold.grey('1500 MB')}`;
        expect(gauge.toString()).toEqual(expected);
    });
});