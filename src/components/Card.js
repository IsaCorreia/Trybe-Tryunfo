import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName, // string
      cardDescription, // string
      cardAttr1, // string
      cardAttr2, // string
      cardAttr3, // string
      cardImage, // string
      cardRare, // string
      cardTrunfo, // boolean
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : undefined }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired, // string
  cardDescription: PropTypes.string.isRequired, // string
  cardAttr1: PropTypes.string.isRequired, // string
  cardAttr2: PropTypes.string.isRequired, // string
  cardAttr3: PropTypes.string.isRequired, // string
  cardImage: PropTypes.string.isRequired, // string
  cardRare: PropTypes.string.isRequired, // string
  cardTrunfo: PropTypes.bool.isRequired, // boolean
};

export default Card;
