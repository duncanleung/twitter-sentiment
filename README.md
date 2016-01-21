# twitter-sentiment
**A real-time Twitter sentiment dashboard for companies who want to monitor the sentiment around their brand.**

Twitterment listens to the Twitter Streaming API for the searched keyword. Node.js (express) and Socket.io is used to achieve real-time client-server updates when new tweets are received on the server. React.js is used as the view layer to manage DOM rendering of new real-time Tweets with a reusable React TweetCard.jsx component.
D3.js is used to render analyzed Tweet sentiment onto a line graph to show the sentiment trend since the search started.

Regarding D3 and React integration, Twitterment uses React to handle DOM manipulations for plotting Data Points (DataPoints.jsx) and Line Paths (LinePath.jsx) for the line graph. This decision was made since React already knows when to rerender the graph when new tweets are received and the tweet counts are updated in the app.

**Built Upon the following technologies:**
- Node (Express)
- Socket.io
- React.js
- D3.js
- Sass
- Twitter Streaming API


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

2 =========== Clone the Repo ===========
- Run `npm install` to install dependencies
- Run `node server/app-server.js` to start!
- FYI: `npm start` will run webpack and bundle any changes you may make
- `ctrl-c` to stop your server! You will burn through your Datum Sentiment 1000/day request limit fast!

![Twitterment Main Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-search.png)
![Twitterment Technologies Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-features.png)
![Twitterment Stream Screen](http://www.duncanleung.com/portfolio/twitterment-github/twitterment-stream.png)
