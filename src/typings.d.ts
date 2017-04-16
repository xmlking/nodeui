// https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/third-party-lib.md
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html

// declare module 'typeless-package';
// declare var stringScriptGlobal: any;

// import { Observable } from "./observable";
// declare module "./observable" {
//     interface Observable<T> {
//         map<U>(f: (x: T) => U): Observable<U>;
//     }
// }
// Observable.prototype.map = function (f) {
//     // ... another exercise for the reader
// }

// declare global {
//     interface Console {
//         draft(...args: any[]): any;
//     }
// }

interface Console {
    draft(args?: any[]): any;
}

declare namespace NodeJS {
     interface WritableStream  {
        columns?: number;
        rows?: number;
    }
}