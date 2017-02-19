# twitter-sentiment
**Live Demo:** [twitterment.herokuapp.com](http://twitterment.herokuapp.com)

_There is a daily limit on the number of Twitter Stream API requests. **Please don't leave the app running continually.**_
>_If no Tweets show up, it's because the daily limit has already been reached. Please try again the next day._

>_Or, you can also download the repo and run it on your own server with your own Twitter Stream API keys =)_

####About
Twitterment (Twitter Sentiment) Is a real-time Twitter sentiment dashboard that analyzes and graphs the sentiment of a tracked keyword.

This is an experimental project to test out:
- Socket.io
- React.js
- D3.js

I am currently in the process refactoring to update to:
- ES6
- React 0.x to 15.x
- React controller views and stateless functional components

####Summary
Twitterment listens to the Twitter Streaming API for the searched keyword. Received Tweets are analyzed with an [AFINN-based sentiment analysis npm module](https://github.com/thisandagain/sentiment), and the analyzed Tweet object is sent to the client.

Node.js (Express) and Socket.io is used on the backend to achieve real-time client-server updates when new tweets are received on the server. React.js is used as the view layer to manage DOM rendering of new Tweets in real-time with a reusable React TweetCard.jsx component. D3.js is used to render each sentiment analyzed Tweet onto a line graph to show the sentiment trend since the search started.

Regarding D3 and React integration, Twitterment uses React to handle DOM manipulations for plotting Data Points (DataPoints.jsx) and Line Paths (LinePath.jsx) for the line graph. This decision was made since React already knows when to rerender the graph when new tweets are received and the tweet counts are updated in the app.

####Built With the Following Technologies:
- Node (Express)
- Socket.io
- React.js
- D3.js
- Sass
- Twitter Streaming API
- Babel
- Webpack


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

![Twitterment Main Screen](http://res.cloudinary.com/leungd/image/upload/v1486945672/github/twitterment-1.png)
![Twitterment Stream Screen](http://res.cloudinary.com/leungd/image/upload/v1486945672/github/twitterment-2.png)
![Twitterment Technologies Screen](http://res.cloudinary.com/leungd/image/upload/v1486945672/github/twitterment-3.png)
