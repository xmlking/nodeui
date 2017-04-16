import * as chalk from "chalk";

interface UserOptions {
    x?: number
    y?: number
    width?: string | number
    height?: string | number
    scroll?: number
}

export class LineBuffer {
    static defaultOptions: UserOptions = {
        x: 0,
        y: 0,
        width: 'console',
        height: 'console',
        scroll: 0
    };
    lines = [];

    constructor(public userOptions: UserOptions) {
        Object.assign(this.userOptions, LineBuffer.defaultOptions);
    }

    get height(): number {
        if (typeof this.userOptions.height === 'string')
            return process.stdout.rows;
        else
            return this.userOptions.height;
    }

    get width(): number {
        if (typeof this.userOptions.width === 'string')
            return process.stdout.columns;
        else
            return this.userOptions.width;
    }

    addLine(lineObject) {
        this.lines.push(lineObject);
        return this;
    }

    fill(fillLine) {
        const fillHeight = this.height - this.lines.length;
        if (fillHeight > 0) {
            for (let i = 0; i < fillHeight; i++) {
                this.addLine(fillLine);
            }
        }
        return this;
    }

    output() {
        // First grab a subset of the lines depending on the scroll location and the height of the buffer.
        let outputLines;
        let sliceEnd;
        let outputHeight = this.height;
        if (this.userOptions.scroll > this.lines.length)
            return;

        if (this.lines.length - this.userOptions.scroll > outputHeight)
            outputLines = this.lines.slice(this.userOptions.scroll, this.userOptions.scroll + outputHeight);
        else
            outputLines = this.lines.slice(this.userOptions.scroll);

        // First move the cursor to the location where we want the buffer to draw.
        let currentY = this.userOptions.y;
        outputLines.forEach(function (line) {
            // TODO
            //process.stdout.write(clc.moveTo(this.userOptions.x, currentY));
            line.output();
            currentY++;
        });
    };


}
