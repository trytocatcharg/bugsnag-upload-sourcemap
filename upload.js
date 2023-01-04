const path = require('path');
const consola = require('consola')
const { browser } = require('@bugsnag/source-maps');

const apiKey = 'YOUR KEY';
const appVersion = 'YOUR APP VERSION';
var ROOT = path.resolve(__dirname, '..');
const directory = path.resolve(ROOT, './dist');

(async function upload() {
        await browser.uploadMultiple({
            apiKey,
            appVersion,
            overwrite: true,
            baseUrl: 'your-domain',
            directory,
            logger: consola
        });
    }
)();


