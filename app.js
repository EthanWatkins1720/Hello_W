var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World! Did you know a group of jellyfish is called a smack of jellyfish? If that's not fun enough, did you know \"You've Lost That Lovin' Feelin'\" by The Righteous Brothers was the most played song on the radio in the 20th century! Do you know what movie caused that?");
  })
  .listen(port);