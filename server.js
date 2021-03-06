
const express = require("express");
const app = express();

const events = [
   

   {
     "id" : 2632021,
      "date" : "26.03.2021",
      "title" : "Venus at superior solar conjunction",
      "summary" : "Venus will pass very close to the Sun in the sky as its orbit carries it around the far side of the solar system from the Earth.",
      "url" : "https://in-the-sky.org/news.php?id=20210326_11_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/innerplanets/venus.jpg",
     "important" : true
    },
   {
     "id" : 2732021,
      "date" : "27.03.2021",
      "title" : "136472 Makemake at opposition",
      "summary" : "136472 Makemake will be well placed in the sky, in the constellation Coma Berenices. It will be visible for much of the night, reaching its highest point in the sky around midnight local time",
      "url" : "https://in-the-sky.org/news.php?id=20210327_13_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/dwarfplanets/136472.jpg",
     "important" : false
    },
   {
     "id" : 2832021,
      "date" : "28.03.2021",
      "title" : "Full Moon",
      "summary" : "The Moon will reach full phase. At this time in its monthly cycle of phases, the Moon lies almost directly opposite the Sun in the sky, placing it high above the horizon for much of the night.",
      "url" : "https://in-the-sky.org/news.php?id=20210328_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/full_moon.jpg",
     "important" : false
    },
   {
     "id" : 2932021,
      "date" : "29.03.2021",
      "title" : "Venus at greatest brightness",
      "summary" : "Venus will reach its greatest brightness in its 2021 evening apparition. It will be shining brightly at mag -3.9.",
      "url" : "https://in-the-sky.org/news.php?id=20210329_11_100 g",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/innerplanets/venus.jpg",
     "important" : false
    },
   {
      "id" : 3032021,
      "date" : "30.03.2021",
      "title" : "The Moon at perigee",
      "summary" : "The Moon will reach the closest point along its orbit to the Earth and will appear slightly larger than at other times.",
      "url" : "https://in-the-sky.org/news.php?id=20210330_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_perigee.jpg",
     "important" : false
    },
   {
      "id" : 3132021,
      "date" : "31.03.2021",
      "title" : "The Moon at aphelion",
      "summary" : "The Moon's monthly orbit around the Earth will carry it to its furthest point from the Sun ??? its aphelion ??? at a distance of 1.0010 AU from the Sun.",
      "url" : "https://in-the-sky.org/news.php?id=20210330_08_101",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_aphelion.jpg",
     "important" : false
    },
  {
      "id" : 242021,
      "date" : "02.04.2021",
      "title" : "M104 is well placed",
      "summary" : "The sombrero galaxy (M104, NGC 4594; mag 9.0) will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time. At a declination of -11??37', it is easiest to see from the southern hemisphere; it can be seen at latitudes between 58??N and 81??S.",
      "url" : "https://in-the-sky.org/news.php?id=20210401_17_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m104_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 442021,
      "date" : "04.04.2021",
      "title" : "Moon at Last Quarter",
      "summary" : "The Moon will be prominent in the dawn sky, rising at around midnight. Over coming days, the Moon will rise later each day, so that it is visible for less time before sunrise and it less far above the eastern horizon before dawn. By the time it reaches new moon, it will rise at around dawn and set at around dusk, making it visible only during the daytime.",
      "url" : "https://in-the-sky.org/news.php?id=20210404_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/moon_at_last_quarter.jpg",
      "important" : false
    },
  {
      "id" : 542021,
      "date" : "05.04.2021",
      "title" : "M94 is well placed",
      "summary" : "M94 (mag 9.0) , a spiral galaxy in Canes Venatici will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time.",
      "url" : "https://in-the-sky.org/news.php?id=20210404_17_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m94_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 632021,
      "date" : "06.04.2021",
      "title" : "NGC 4755 is well placed",
      "summary" : "Across much of the world the jewel box open star cluster (NGC 4755, also known as the Kappa Crucis cluster; mag 4.2) in Crux will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time",
      "url" : "https://in-the-sky.org/news.php?id=20210405_17_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/ngc_4755_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 742021,
      "date" : "07.04.2021",
      "title" : "Conjunction of the Moon and Jupiter",
      "summary" : "The Moon and Jupiter will share the same right ascension, with the Moon passing 4??23' to the south of Jupiter. The Moon will be 25 days old.",
      "url" : "https://in-the-sky.org/news.php?id=20210407_20_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
      "important" : false
    },
  {
      "id" : 842021,
      "date" : "09.04.2021",
      "title" : "The Moon at perihelion",
      "summary" : "The Moon's monthly orbit around the Earth will carry it to its closest point to the Sun ??? its perihelion ??? at a distance of 0.9994 AU from the Sun.",
      "url" : "https://in-the-sky.org/news.php?id=20210409_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_perihelion.jpg",
      "important" : false
    },
  {
      "id" : 1242021,
      "date" : "12.04.2021",
      "title" : "New Moon",
      "summary" : "The Moon will pass close to the Sun and become lost in the its glare for a few days. The Moon's orbital motion carries it around the Earth once every four weeks, and as a result its phases cycle from new moon, through first quarter, full moon and last quarter, back to new moon once every 29.5 days.",
      "url" : "https://in-the-sky.org/news.php?id=20210412_08_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/new_moon.jpg",
      "important" : true
    },
  {
      "id" : 1442021,
      "date" : "14.04.2021",
      "title" : "NGC 5128 is well placed",
      "summary" : "Across much of the world Centaurus A (NGC 5128; mag 7.8) will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time. (UTC +1)",
      "url" : "https://in-the-sky.org/news.php?id=20210413_17_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/ngc_5128_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 1542021,
      "date" : "15.04.2021",
      "title" : "M51 is well placed",
      "summary" : "The whirlpool galaxy (M51, NGC 5194; mag 9.0) will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time. (UTC +1)",
      "url" : "https://in-the-sky.org/news.php?id=20210414_17_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m51_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 1742021,
      "date" : "17.04.2021",
      "title" : "M83 is well placed",
      "summary" : "Across much of the world the southern pinwheel galaxy (M83, NGC 5236; mag 8.2), a face-on spiral galaxy in Hydra will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time.",
      "url" : "https://in-the-sky.org/news.php?id=20210416_17_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m83_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 1842021,
      "date" : "18.04.2021",
      "title" : "M3 is well placed",
      "summary" : "The globular cluster M3 (NGC 5272; mag 6.2) in Canes Venatici will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time.",
      "url" : "https://in-the-sky.org/news.php?id=20210417_17_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m3_is_well_placed.jpg",
      "important" : false
    },
    {
      "id" : 1942021,
      "date" : "19.04.2021",
      "title" : "Mercury at superior solar conjunction",
      "summary" : "Mercury will pass very close to the Sun in the sky as its orbit carries it around the far side of the solar system from the Earth.",
      "url" : "https://in-the-sky.org/news.php?id=20210419_11_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/innerplanets/mercury.jpg",
      "important" : false
    },
  {
      "id" : 2042021,
      "date" : "20.04.2021",
      "title" : "Moon at First Quarter",
      "summary" : "The Moon will pass first quarter phase, appearing prominent in the evening sky and setting in the middle of the night.",
      "url" : "https://in-the-sky.org/news.php?id=20210420_08_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/moon_at_first_quarter.jpg",
      "important" : false
    },
  {
      "id" : 2242021,
      "date" : "22.04.2021",
      "title" : "Lyrid meteor shower 2021",
      "summary" : "The Lyrid meteor shower will be active from 16 April to 25 April, producing its peak rate of meteors around 22 April.",
      "url" : "https://in-the-sky.org/news.php?id=20210422_10_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/meteors/meteors.jpg",
      "important" : false
    },
  {
      "id" : 2342021,
      "date" : "23.04.2021",
      "title" : "M101 is well placed",
      "summary" : "The pinwheel galaxy (M101, NGC 5457; mag 8.3) will be well placed, high in the sky. It will reach its highest point in the sky at around midnight local time.",
      "url" : "https://in-the-sky.org/news.php?id=20210422_17_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/deepsky/m101_is_well_placed.jpg",
      "important" : false
    },
  {
      "id" : 2742021,
      "date" : "27.04.2021",
      "title" : "Full Moon",
      "summary" : "The Moon will reach full phase. At this time of the month, the Moon is visible for much of the night, rising at around dusk, and setting at around dawn.",
      "url" : "https://in-the-sky.org/news.php?id=20210427_08_100",
    "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/full_moon.jpg",
      "important" : true
    },
  {
      "id" : 2842021,
      "date" : "28.04.2021",
      "title" : "Conjunction of Ceres and Eris",
      "summary" : "1 Ceres and 136199 Eris will share the same right ascension, with 1 Ceres passing 4??54' to the north of 136199 Eris.",
      "url" : "https://in-the-sky.org/news.php?id=20210428_20_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
      "important" : false
    },
  {
      "id" : 2942021,
      "date" : "29.04.2021",
      "title" : "The Moon at aphelion",
      "summary" : "The Moon's monthly orbit around the Earth will carry it to its furthest point from the Sun ??? its aphelion ??? at a distance of 1.0091 AU from the Sun.",
      "url" : "https://in-the-sky.org/news.php?id=20210429_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_aphelion.jpg",
      "important" : false
    },
  {
      "id" : 3052021,
      "date" : "30.04.2021",
      "title" : "Uranus at solar conjunction",
      "summary" : "Uranus will pass close to the Sun in the sky as its orbit carries it around the far side of the solar system from the Earth",
      "url" : "https://in-the-sky.org/news.php?id=20210430_12_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/outerplanets/uranus.jpg",
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
