const request = require('request');
const yargs = require('yargs');


const argv = yargs
    .options({
        l: {
            demand: true,
            alias: 'location',
            describe: 'Location to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

let encodedAddress = encodeURIComponent(argv.l);

request({
    url: `https://www.metaweather.com/api/location/search/?query=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body));
});