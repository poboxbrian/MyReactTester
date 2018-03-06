import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const CARDS = [{
  "edited": "2014-12-20T21:17:56.891Z",
  "name": "Luke Skywalker",
  "created": "2014-12-09T13:50:51.644Z",
  "gender": "male",
  "skin_color": "fair",
  "hair_color": "blond",
  "height": "172",
  "eye_color": "blue",
  "mass": "77",
  "homeworld": 1,
  "birth_year": "19BBY",
  "image": "luke_skywalker.jpg",
  "id": 1,
  "vehicles": [
      14,
      30
  ],
  "starships": [
      12,
      22
  ],
  "films": [
      1,
      2,
      3,
      6
  ]
},
{
  "edited": "2014-12-20T21:17:50.309Z",
  "name": "C-3PO",
  "created": "2014-12-10T15:10:51.357Z",
  "gender": "n/a",
  "skin_color": "gold",
  "hair_color": "n/a",
  "height": "167",
  "eye_color": "yellow",
  "mass": "75",
  "homeworld": 1,
  "birth_year": "112BBY",
  "image": "c-3po.jpg",
  "id": 2,
  "vehicles": [],
  "starships": [],
  "films": [
      1,
      2,
      3,
      4,
      5,
      6
  ]
}
];


ReactDOM.render(
  <App cards={CARDS} />,
  document.getElementById('root')
);
