import * as chalk from "chalk";

export class Line {
    private lineContent = "";

    constructor(public defaultBuffer) {
    }


    // Put text in the line
    text(text, styles) {
        if(styles) {
            styles.forEach(function (element) {
                text = element(text);
            });
        }
        this.lineContent += text;
        return this;
    };

    // Put padding in the line.
    padding(width, styles) {
        let padding = Array(width + 1).join(" ");
        if(styles) {
            styles.forEach(function (element) {
                padding = element(padding);
            });
        }
        this.lineContent += padding;
        return this;
    };

    // Put padding in the line.
    column(text, columnWidth, textStyles) {
        let textWidth = chalk.stripColor(text).length;

        if (textWidth > columnWidth) {
            this.text(text.slice(0, columnWidth), textStyles);
        }
        else if (textWidth < columnWidth) {
            this.text(text, textStyles);
            this.padding(columnWidth - textWidth, []);
        }
        else {
            this.text(text, textStyles);
        }
        return this;
    }

    // Fill the rest of the width of the line with space.
    fill(styles) {
        let fillWidth = process.stdout.columns - chalk.stripColor(this.lineContent).length;
        if (fillWidth > 0)
            this.padding(fillWidth, styles);
        return this;
    }

    // Store a line in a line buffer to be output later.
    store(buffer) {
        if (typeof buffer == 'undefined') {
            if (typeof this.defaultBuffer == 'undefined')
                process.stderr.write('Attempt to store a line in a line buffer, without providing a line buffer to store that line in.');
            else
                this.defaultBuffer.addLine(this);
        }
        else {
            buffer.addLine(this);
        }
        return this;
    }

    // Output a line directly to the screen.
    output() {
        process.stdout.write(this.lineContent + "\n");
        return this;
    }

    // Return the contents
    contents() {
        return this.lineContent;
    }
}
