
//declaring the elements to display rss feed
//declaring express feedparser serve socket.io
const feedparser = require('feedparser-promised');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');

//displaying on serve
server.listen(8000);
console.log('Server started on localhost:8000');

//referncing the rss feed that I want to display
let url = 'https://www.google.ie/alerts/feeds/10663948362751557705/4511034072220974544';

// Declaring an array variable for the feed content
let feed = [];

// Parssing the feed
feedparser.parse(url).then(items => {
  // Updating the variable with the new data
  for (const [i, item] of items.entries()) {
    // Retrieving the ten first elements, with their title and link
    // And adding them to the feed array
    if (i < 9) {
      feed.push({
        title: item.title,
        link: item.link
      });
    }
  }

  // Writing it to a file so it is easier to view the data from a json point of view

  fs.writeFile('feed.json', JSON.stringify(items, null, 2), 'utf-8', (data) => {});
});

// Defining the default route to where the content is displayed
app.get('/', (req, res) => {
  // Render the page
  res.render('test.ejs');

  // Sending the data to the client using socket.io
  io.on('connection', io => {
    io.emit('feed', {
      feed: feed
    });
  });
});
