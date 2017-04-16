import {ChalkChain} from "chalk";

export class Spinner {
    private draft: any;
    private timer: any;
    private frames: string[] = 'win32' == process.platform ? ['|', '/', '-', '\\'] : ['◜', '◠', '◝', '◞', '◡', '◟'];

    constructor(public message: any) {
        this.draft = console.draft();
    }

    start(color?: ChalkChain, interval = 100) {
        let i = 0;

        this.timer = setInterval(() => {
            // Next frame
            let frame = this.frames[i++ % this.frames.length];
            if(color) {
                this.draft(color(`${frame} ${this.message}`));
            } else {
                this.draft(frame, this.message);
            }

        }, interval);
    }

    stop() {
        this.draft(); // remove draft line
        clearInterval(this.timer);
    }

}
