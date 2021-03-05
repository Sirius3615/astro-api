
const express = require("express");
const app = express();

const events = [
  {
      "id" : 132021,
      "date" : "01.03.2012",
      "title" : "The Moon at aphelion",
      "summary" : "The Moon's monthly orbit around the Earth will carry it to its furthest point from the Sun – its aphelion – at a distance of 0.9930 AU from the Sun.",
      "url" : "https://in-the-sky.org/news.php?id=20210301_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_aphelion.jpg",
      "important" : false
    }
];

var api_prefix = '/api/v2'

//Get all events
app.get(api_prefix + "/events", (req, res) => {
  res.send(events);
});

//Get event by date
app.get(api_prefix + "/events/:id", (req, res) => {
  const event = events.find(c => c.id === parseInt(req.params.id));
  if (!event) res.status(404).send('The event for the given date was not found.')
  res.send(event)
});

const listener = app.listen(process.env.PORT, () => {
  console.log("API is listening on port " + listener.address().port + '  So its all runing good :)');
});
