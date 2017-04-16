const fsp = require("fs-p");

(async function() {
    try {
        await fsp.remove('./dist')

    } catch (err) { console.error(err) }
}());