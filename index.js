const request = require('request')
const crypto = require('crypto')

var baseurl = "https://api.coindcx.com"

var timeStamp = Math.floor(Date.now());
// To check if the timestamp is correct
console.log(timeStamp);

// Place your API key and secret below. You can generate it from the website.
key = "2419691d5cee04826c366ae7667dd09af246ff6bae7ceafc";
secret = "0f884db05051726dd0c9198ac4533dc23fad5cfda296d5006623dae21bbd1672"


body = {
  "timestamp": timeStamp
}

const payload = new Buffer(JSON.stringify(body)).toString();
const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex')

const options = {
  url: baseurl + "/exchange/v1/users/info",
  headers: {
    'X-AUTH-APIKEY': key,
    'X-AUTH-SIGNATURE': signature
  },
  json: true,
  body: body
}

request.post(options, function(error, response, body) {
  console.log(body);
})