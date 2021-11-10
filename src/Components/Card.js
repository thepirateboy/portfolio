import * as Items from "./Items";
import werk from "./img/werk.png";
import chat from "./img/chat.png";
import imbd from "./img/imbd.png";
import zeroweather from "./img/zeroweather.png";
import yopimovie from "./img/yopimovie.png";

function CardData(
  title,
  picture,
  description,
  type,
  api,
  database,
  link,
  theButton
) {
  this.title = title;
  this.picture = picture;
  this.description = description;
  this.type = type;
  this.api = api;
  this.database = database;
  this.link = link;
  this.theButton = theButton;
}

export var theCards = [];
theCards = [
  new CardData(
    "Yopi Movie",
    yopimovie,
    "A simple Movie Database Web.",
    "Web",
    "OMDB API",
    "IMDb",
    "https://yopi-movie.yaeyx.com",
    "See Demo"
  ),
  new CardData(
    "Werk",
    werk,
    "This app is going to be office/company productivity app, that will has bunches of functionalities including department chat, department report form, etc.",
    "Android & iOS App",
    "Firebase API",
    "Firebase Cloud Firestore",
    "https://github.com/thepirateboy/werk",
    "See code"
  ),
  new CardData(
    "IMBD",
    imbd,
    "A simplified version of Internet Movie Database (IMDb)",
    "Android & iOS App",
    "OMDb API",
    "None",
    "https://github.com/thepirateboy/imbd_app",
    "See code"
  ),
  new CardData(
    "Group Chat App",
    chat,
    "A simple group chatting with register and login system.",
    "Android & iOS App",
    "Firebase API",
    "Firebase Cloud Firestore",
    "https://github.com/thepirateboy/group_chat_app",
    "See code"
  ),
  new CardData(
    "Zero Weather",
    zeroweather,
    "A simple weather app.",
    "Android & iOS App",
    "OpenWeatherMap API",
    "none",
    "https://github.com/thepirateboy/zeroweather",
    "See code"
  ),

  // new CardData("Title", "pict", "description", "type", "api", "database"),
];

export var cardList = [];

for (var i of theCards) {
  cardList.push(
    Card(
      i.title,
      i.picture,
      i.description,
      i.type,
      i.api,
      i.database,
      i.link,
      i.theButton
    )
  );
}

function Card(
  title,
  picture,
  description,
  type,
  api,
  database,
  link,
  theButton
) {
  if (type === undefined) {
    type = "None";
  }
  if (api === undefined) {
    api = "None";
  }
  if (database === undefined) {
    database = "None";
  }

  return (
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src={picture} class="card-img-top" alt="..." />

        <div class="card-body">
          <h3 class="card-text">{title}</h3>
          <p>{description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <li class="list-group-item">Type: {type}</li>
            <li class="list-group-item">API: {api}</li>
            <li class="list-group-item">Database: {database}</li>
            <li class="list-group-item"></li>
            <a href={link} class="btn btn-primary">
              {theButton}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
