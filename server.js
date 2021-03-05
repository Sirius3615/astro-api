
const express = require("express");
const app = express();

const events = [
  {
      "id" : 242021,
      "date" : "02.04.2021",
      "title" : "M104 is well placed",
      "summary" : "",
      "url" : "",
      "imageUrl" : "",
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
  res.send(event);
});

//POST new data - admin only
app.post(api_prefix + "/post/event", (req, res) => {
  if (!req.body.title || req.body.title.lenght < 3) {
    //404 
    res.status(404).send('Title is required and shoud be longer than 3 characters.')
    return;
  }
   const event_new = {
     id: req.body.id,
     date: req.body.date,
     title: req.body.title,
     summary: req.body.summary,
     url: req.body.url,
     imageUrl: req.body.imageUrl,
     important: req.body.important
   };
  events.push(event_new);
  req.send(event_new);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("API is listening on port " + listener.address().port + '  So its all runing good :)');
});
