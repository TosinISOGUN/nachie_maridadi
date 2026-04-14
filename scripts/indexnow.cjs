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
  console.log(`IndexNow: pinged successfully (status ${res.statusCode})`);
});

req.setTimeout(5000, () => {
  console.log('IndexNow: request timed out (non-critical, skipping)');
  req.destroy();
});

req.on('error', (e) => {
  // Network errors are non-critical — IndexNow is just an SEO optimization
  console.log(`IndexNow: ping skipped (${e.message}) — this is non-critical`);
});

req.write(data);
req.end();
