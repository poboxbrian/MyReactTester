import React, { Component } from 'react';
import './Card.css';

/*
class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>Darth Vader</div>
          	<img src='http://localhost:3008/darth_vader.jpg' alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>41.9BBY</span>
            </p>
            <p>
                <span>Homeworld:</span>
                <span>Tatooine</span>
            </p>
        </div>
    </div>

    );
  }
}
  <tr>
        <td>{card.name}</td>
        <td>{card.created}</td>
        <td>{card.gender}</td>
        <td>{card.skin_color}</td>
        <td>{card.hair_color}</td>
        <td>{card.height}</td>
        <td>{card.eye_color}</td>
        <td>{card.mass}</td>
        <td>{card.homeworld}</td>
        <td>{card.birth_year}</td>
        <td>{card.image}</td>
        <td>{card.id}</td>
        <td>{card.vehicles}</td>
        <td>{card.starships}</td>
        <td>{card.films}</td>
        <td>{card.price}</td>
      </tr>


  

      */


var fillInPlanetName = function(card){
  const myRequest = new Request('http://localhost:3008/planets?id=' + card.homeworld);
  var planetCardId = 'planet'+card.id;

  fetch(myRequest)
  .then(function(response) {
    return response.json();
  })
  .catch(error => console.error('Error:', error))
  .then(function(myJson) {
    console.log(myJson[0].name);
    document.getElementById(planetCardId).innerText = myJson[0].name;
  });
}

class CardContent extends React.Component {
  render() {
    const card = this.props.card;
    var image = 'http://localhost:3008/' + card.image;
    var cardId = 'planet'+card.id;
    console.log(cardId+',planet'+card.homeworld);
    
    return (
      <div className='card-content'>
        <div className='card-name'>{card.name}</div>
        <img src={image} alt='profile' />
        <p>
          <span>Birthday:</span>
          <span>{card.birth_year}</span>
        </p>
        <p>
          {/* Note that in order to get the homeworld's name, 
            you have to get the planet name from a different endpoint than the people */}
          <span>Homeworld:</span>
          <span id={cardId}>{card.homeworld}</span>
        </p>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const rows = [];
    this.props.cards.forEach((card) => {
      fillInPlanetName(card);
      rows.push(<
        CardContent card={card}
        key={card.id}
      />
      );
    });

    return (
      <div className='card'>
        {rows}
      </div>

    );
  }
}

export default Card;