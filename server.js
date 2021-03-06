
const express = require("express");
const app = express();

const events = [
  {
      "id" : 242021,
      "date" : "02.04.2021",
      "title" : "M104 is well placed",
      "summary" : "The sombrero galaxy (M104, NGC 4594; mag 9.0) will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time. At a declination of -11°37', it is easiest to see from the southern hemisphere; it can be seen at latitudes between 58°N and 81°S.",
      "url" : "https://in-the-sky.org/news.php?id=20210401_17_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m104_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 442021, // 2 - day, 4 - month, 2021 - year
      "date" : "04.04.2021",
      "title" : "Moon at Last Quarter",
      "summary" : "The Moon will be prominent in the dawn sky, rising at around midnight. Over coming days, the Moon will rise later each day, so that it is visible for less time before sunrise and it less far above the eastern horizon before dawn. By the time it reaches new moon, it will rise at around dawn and set at around dusk, making it visible only during the daytime.",
      "url" : "https://in-the-sky.org/news.php?id=20210404_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/moon_at_last_quarter.jpg",
      "important" : false
    }
];






//=============
// ROUTES
//=============

var api_prefix = '/api/v2'

//Get all events
app.get(api_prefix + "/events", (req, res) => {
  res.send(events);
});

//Get event by id (date)
app.get(api_prefix + "/event/:id", (req, res) => {
  const event = events.find(c => c.id === parseInt(req.params.id));
  if (!event) res.status(404).send('The event for the given date was not found.')
  res.send(event);
});

app.get(api_prefix + "/event/important/:important", (req, res) => {
  const important = req.params.important;
  
  
        res.send
    }

    // Sending 404 when not found something is a good practice
    
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

//============
// LISTENER

const listener = app.listen(process.env.PORT, () => {
  console.log("API is listening on port " + listener.address().port );
});
