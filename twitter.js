let stream = require("stream");
let Scraper = require("twitter-scraper").Scraper;
let express = require("express");
let app = require("express")();
app.get("/", (req, res) => {
  res.sendfile(__dirname + "/public/index.html");
});
app.get("/tweets/:userId/:start/:end", (req, res) => {
  let { userId } = req.params;
  let { start } = req.params;
  let { end } = req.params;
  let query = "from:" + userId + " since:" + start + "until:" + end;
  let scraper = new Scraper(query);
  let tweets = {
    data: [],
    total: ""
  };
  let toConsole = new stream.Writable({
    objectMode: true,
    write: function(tweet, enc, cb) {
      tweets.data.push(tweet.text);
      // console.log("Got tweet: ", tweet.text);
      return cb();
    }
  });
  scraper.pipe(toConsole);
  // Start the scraper
  scraper.start();
  toConsole.on("finish", () => {
    tweets.total = scraper.total;
    res.json(tweets);
  });
});

app.get("/core-tweets/:userId/:start/:end", (req, res) => {
  let { userId } = req.params;
  let { start } = req.params;
  let { end } = req.params;
  let query = "from:" + userId + " since:" + start + "until:" + end;
  let scraper = new Scraper(query);
  let tweets = {
    data: [],
    total: ""
  };
  let toConsole = new stream.Writable({
    objectMode: true,
    write: function(tweet, enc, cb) {
      tweets.data.push(tweet);
      // console.log("Got tweet: ", tweet.text);
      return cb();
    }
  });
  scraper.pipe(toConsole);
  // Start the scraper
  scraper.start();
  toConsole.on("finish", () => {
    tweets.total = scraper.total;
    res.json(tweets);
  });
});
app.set("port", 3000);
app.listen(app.get("port"), function() {
  console.log(`server running on port ${app.get("port")}`);
});
