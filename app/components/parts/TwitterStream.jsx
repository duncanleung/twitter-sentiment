var React = require('react'),
    update = require('react-addons-update'),
    TweetList = require('./TweetList.jsx'),
    io = require('socket.io-client');


var TwitterStream = React.createClass({

  //Array of Collected Tweets
  getInitialState: function() {
    return { collectedTweets: [
      { created_at: 'Sat Dec 26 17:54:10 +0000 2015',
        id: 680808836320641000,

        id_str: '680808836320641025',

        text: 'RT @thesolesupplier: Nike Air Max 90 PRM Black Safari. Coming 28th December.\n\nhttps://t.co/zkf7TxpctZ https://t.co/KGaa2WEAMw',

        source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',

        truncated: false,

        in_reply_to_status_id: null,

        in_reply_to_status_id_str: null,

        in_reply_to_user_id: null,

        in_reply_to_user_id_str: null,

        in_reply_to_screen_name: null,

        user:

         { id: 175165311,

           id_str: '175165311',

           name: 'Suicide Season',

           screen_name: 'AliciaForbes_xo',

           location: 'Manchester',

           url: null,

           description: 'Batman is life.',

           protected: false,

           verified: false,

           followers_count: 838,

           friends_count: 307,

           listed_count: 5,

           favourites_count: 1618,

           statuses_count: 3503,

           created_at: 'Thu Aug 05 20:18:41 +0000 2010',

           utc_offset: null,

           time_zone: null,

           geo_enabled: true,

           lang: 'en',

           contributors_enabled: false,

           is_translator: false,

           profile_background_color: 'D92B7F',

           profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/641548087/zsmmgnwzrl044a8tse8a.jpeg',

           profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/641548087/zsmmgnwzrl044a8tse8a.jpeg',

           profile_background_tile: true,

           profile_link_color: '9266CC',

           profile_sidebar_border_color: '000000',

           profile_sidebar_fill_color: '7AC3EE',

           profile_text_color: '3D1957',

           profile_use_background_image: true,

           profile_image_url: 'http://pbs.twimg.com/profile_images/677236704420470784/EPiooEP1_normal.jpg',

           profile_image_url_https: 'https://pbs.twimg.com/profile_images/677236704420470784/EPiooEP1_normal.jpg',

           profile_banner_url: 'https://pbs.twimg.com/profile_banners/175165311/1436740487',

           default_profile: false,

           default_profile_image: false,

           following: null,

           follow_request_sent: null,

           notifications: null },

        geo: null,

        coordinates: null,

        place: null,

        contributors: null,

        retweeted_status:

         { created_at: 'Sat Dec 26 17:01:56 +0000 2015',

           id: 680795695197110300,

           id_str: '680795695197110272',

           text: 'Nike Air Max 90 PRM Black Safari. Coming 28th December.\n\nhttps://t.co/zkf7TxpctZ https://t.co/KGaa2WEAMw',

           source: '<a href="http://www.hootsuite.com" rel="nofollow">Hootsuite</a>',

           truncated: false,

           in_reply_to_status_id: null,

           in_reply_to_status_id_str: null,

           in_reply_to_user_id: null,

           in_reply_to_user_id_str: null,

           in_reply_to_screen_name: null,

           user:

            { id: 1651093056,

              id_str: '1651093056',

              name: 'The Sole Supplier',

              screen_name: 'thesolesupplier',

              location: 'UK',

              url: 'http://www.thesolesupplier.co.uk',

              description: 'An online news outlet for the most exclusive UK / European sneaker releases. http://facebook.com/thesolesupplier | http://instagram.com/thesolesupplier',

              protected: false,

              verified: false,

              followers_count: 41750,

              friends_count: 7150,

              listed_count: 133,

              favourites_count: 11224,

              statuses_count: 18292,

              created_at: 'Tue Aug 06 20:04:50 +0000 2013',

              utc_offset: 0,

              time_zone: 'London',

              geo_enabled: false,

              lang: 'en',

              contributors_enabled: false,

              is_translator: false,

              profile_background_color: '131516',

              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/439608953400352768/Uj3xMh2A.png',

              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/439608953400352768/Uj3xMh2A.png',

              profile_background_tile: false,

              profile_link_color: 'DB0000',

              profile_sidebar_border_color: '000000',

              profile_sidebar_fill_color: 'EFEFEF',

              profile_text_color: '333333',

              profile_use_background_image: true,

              profile_image_url: 'http://pbs.twimg.com/profile_images/592421097196355586/e0mlGY9k_normal.png',

              profile_image_url_https: 'https://pbs.twimg.com/profile_images/592421097196355586/e0mlGY9k_normal.png',

              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1651093056/1430078700',

              default_profile: false,

              default_profile_image: false,

              following: null,

              follow_request_sent: null,

              notifications: null },

           geo: null,

           coordinates: null,

           place: null,

           contributors: null,

           is_quote_status: false,

           retweet_count: 5,

           favorite_count: 6,

           entities:

            { hashtags: [],

              urls: [Object],

              user_mentions: [],

              symbols: [],

              media: [Object] },

           extended_entities: { media: [Object] },

           favorited: false,

           retweeted: false,

           possibly_sensitive: false,

           filter_level: 'low',

           lang: 'en' },

        is_quote_status: false,

        retweet_count: 0,

        favorite_count: 0,

        entities:

         { hashtags: [],

           urls: [ [Object] ],

           user_mentions: [ [Object] ],

           symbols: [],

           media: [ [Object] ] },

        extended_entities: { media: [ [Object] ] },

        favorited: false,

        retweeted: false,

        possibly_sensitive: false,

        filter_level: 'low',

        lang: 'en',
        timestamp_ms: '1451152450052' }
    ] };
  },

  componentWillMount: function() {
    var socket = io.connect();
    var self = this;

    //When socket receives 'sendTweet', run addTweet
    socket.on('sendTweet', function(receivedTweet) {
      self.addTweet(receivedTweet.tweet);
      console.log(receivedTweet.tweet);
    });
  },

  //Add receivedTweet onto beginning of array
  //Update the state of collectedTweets
  addTweet: function(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = update(tweets, {$unshift: [tweet]});

    this.setState({collectedTweets: newTweets});
  },

  render: function() {
    //Pass collectedTweets to TweetList
    return (
      <div className="stream col-sm-4">
        <h1>Twitter Stream</h1>
        <TweetList collectedTweets={this.state.collectedTweets} />
      </div>
    );
  }
});
  

module.exports = TwitterStream;