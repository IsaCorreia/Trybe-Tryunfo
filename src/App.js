import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.isFormFilled = this.isFormFilled.bind(this);
    this.renderSavedCards = this.renderSavedCards.bind(this);

    this.state = {
      cardName: '', // 'string'
      cardDescription: '', // 'string'
      cardAttr1: '', // 'string'
      cardAttr2: '', // 'string'
      cardAttr3: '', // 'string'
      cardImage: '', // 'string'
      cardRare: 'normal', // 'string'
      cardTrunfo: false, // 'boolean'
      // hasTrunfo, // 'boolean'
      isSaveButtonDisabled: true, // 'boolean'
      savedCards: [],
    };
  }

  onInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [event.target.id]: value }, () => {
      this.isFormFilled();
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
    };
    savedCards.push(newCard);

    // Salva nova varta no estado
    this.setState({
      savedCards,
    });
  };

  isFormFilled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const MAX_NUMBER_FOR_ATTR = 90;
    const MAX_NUMBER_FOR_ATTR_SUM = 210;
    const cardAttrSumValue = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const states = {
      cardName: cardName.length > 0 || false,
      cardDescription: cardDescription.length > 0 || false,
      cardAttr1: (cardAttr1 >= 0 && cardAttr1 <= MAX_NUMBER_FOR_ATTR) || false,
      cardAttr2: (cardAttr2 >= 0 && cardAttr2 <= MAX_NUMBER_FOR_ATTR) || false,
      cardAttr3: (cardAttr3 >= 0 && cardAttr3 <= MAX_NUMBER_FOR_ATTR) || false,
      cardAttrSum: cardAttrSumValue <= MAX_NUMBER_FOR_ATTR_SUM || false,
      cardImage: cardImage.length > 0 || false,
    };
    const statesBool = Object.values(states).every((item) => item === true);
    this.setState({ isSaveButtonDisabled: !statesBool });
  }

  renderSavedCards = () => {
    const { savedCards } = this.state;
    return savedCards.map((item, i) => <Card key={ i } { ...item } />);
  }

  render() {
    const { cardName, savedCards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <h1>Seu baralho:</h1>
        { savedCards.length > 0 ? this.renderSavedCards() : undefined }
      </div>
    );
  }
}

export default App;
