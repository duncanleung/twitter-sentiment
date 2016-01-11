# twitter-sentiment
**A real-time Twitter sentiment dashboard for companies who want to monitor the sentiment around their brand.**

Twitterment listens to the Twitter Streaming API and uses Socket.io to update the client in real-time when new tweets are received. New Tweets are drawn onto the DOM with a reusable React TweetCard.jsx component. New Tweet sentiment data is also drawn onto a line graph to show the sentiment trend since the search started.

Regarding D3 and React integration, Twitterment uses React to handle DOM manipulations for plotting Data Points (DataPoints.jsx) and Line Paths (LinePath.jsx) for the line graph. This decision was made since React already knows when to rerender the graph when new tweets are received and the tweet counts are updated in the app.

**Built Upon the following technologies:**
- Node (Express)
- Socket.io
- React.js
- D3.js
- Sass
- Twitter Streaming API
- Datum Sentiment API (1000 Requests / Day)


##To run an instance of this app, you need:

1 =========== Twitter API Key ===========
- Create `config.js` in `/twitter-sentiment/server/`
- `config.js` holds your own Twitter API Keys


```
config.js
process.env.TWITTER_CONSUMER_KEY = 'YOUR-CONSUMER-KEY-HERE';
process.env.TWITTER_CONSUMER_SECRET = 'YOUR-CONSUMER-SECRET-HERE';
process.env.TWITTER_ACCESS_TOKEN_KEY = 'YOUR-TOKEN-HERE';
process.env.TWITTER_ACCESS_TOKEN_SECRET = 'YOUR-TOKEN-SECRET-HERE';
```

2 =========== Datum Sentiment API Key ===========
- Register your own Datum Sentiment API Key at: http://www.datumbox.com/machine-learning-api/
- Your key should go in `/twitter-sentiment/server/Sentiment.js`
- `var datum = require('datumbox').factory('YOUR OWN DATUM API KEY HERE');`


3 =========== Clone the Repo ===========
- Run `npm install` to install dependencies
- Run `node server/app-server.js` to start!
- FYI: `npm start` will run webpack and bundle any changes you may make
- `ctrl-c` to stop your server! You will burn through your Datum Sentiment 1000/day request limit fast!

![Twitterment Main Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-search.png)
![Twitterment Technologies Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-features.png)
![Twitterment Stream Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-stream.png)
