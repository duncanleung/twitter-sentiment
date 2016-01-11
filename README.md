# twitter-sentiment
A real-time Twitter sentiment dashboard for companies who want to monitor the sentiment around their brand

Built Upon the following technologies:
- Node (Express)
- Socket.io
- React.js
- D3.js
- Sass
- Twitter Streaming API
- Datum Sentiment API (1000 Requests / Day)

To run an instance of this app, you need:
1. =========== Twitter API Key ===========
- Create `config.js` in `/twitter-sentiment/server/`
- `config.js` holds your own Twitter API Keys

`config.js`
```
process.env.TWITTER_CONSUMER_KEY = 'YOUR-CONSUMER-KEY-HERE';
process.env.TWITTER_CONSUMER_SECRET = 'YOUR-CONSUMER-SECRET-HERE';
process.env.TWITTER_ACCESS_TOKEN_KEY = 'YOUR-TOKEN-HERE';
process.env.TWITTER_ACCESS_TOKEN_SECRET = 'YOUR-TOKEN-SECRET-HERE';
```

2. =========== Datum Sentiment API Key ===========
- Register your own Datum Sentiment API Key at: http://www.datumbox.com/machine-learning-api/
- Your key should go in `/twitter-sentiment/server/Sentiment.js`
- `var datum = require('datumbox').factory('YOUR OWN DATUM API KEY HERE');`

3. =========== Clone the Repo ===========
- Run `npm install` to install dependencies
- Run `node server/app-server.js` to start!
- FYI: `npm start` will run webpack and bundle any changes you may make
- `ctrl-c` to stop your server! You will burn through your Datum Sentiment 1000/day request limit fast!

![Twitterment Main Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-search.png)
![Twitterment Technologies Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-features.png)
![Twitterment Stream Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-stream.png)
