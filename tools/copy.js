const fsp = require("fs-p");

(async function() {
    try {
        await fsp.copy('./package.json', './dist/package.json');
        const packageJson = await fsp.readJson('./dist/package.json');
        delete packageJson.devDependencies;
        delete packageJson.scripts;
        packageJson.main = 'lib/index.js';
        // packageJson.types =  'lib/index.d.ts';
        packageJson.module = 'esm/index.js';
        packageJson["jsnext:main"] = "esm/index.js";
        await fsp.writeJson('./dist/package.json', packageJson, {spaces: 2});

        await fsp.copy('./src', './dist/src', file => !file.endsWith('.spec.ts') && !file.endsWith('.json') && !file.endsWith('.d.ts'));

        await fsp.copy('./src/typings.d.ts', './dist/typings.d.ts');
        await fsp.copy('./yarn.lock', './dist/yarn.lock');
        await fsp.copy('./README.md', './dist/README.md');

    } catch (err) { console.error(err) }
}());
