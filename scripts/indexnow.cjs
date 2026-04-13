const https = require('https');

const host = 'nachiemaridadi.vercel.app';
const key = '62212f6618f34f29b28e6473471a72d5';
const keyLocation = `https://${host}/${key}.txt`;
const urlList = [
  `https://${host}/`,
  `https://${host}/about`,
  `https://${host}/services`,
  `https://${host}/gallery`,
  `https://${host}/contact`
];

const data = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow status: ${res.statusCode}`);
});

req.on('error', (e) => {
  console.error(`IndexNow error: ${e.message}`);
});

req.write(data);
req.end();
