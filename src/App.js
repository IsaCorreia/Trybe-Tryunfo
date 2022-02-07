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
    this.checksTrunfo = this.checksTrunfo.bind(this);

    this.state = {
      cardName: '', // 'string'
      cardDescription: '', // 'string'
      cardAttr1: '0', // 'string'
      cardAttr2: '0', // 'string'
      cardAttr3: '0', // 'string'
      cardImage: '', // 'string'
      cardRare: 'normal', // 'string'
      cardTrunfo: false, // 'boolean'
      hasTrunfo: false, // 'boolean'
      isSaveButtonDisabled: true, // 'boolean'
      savedCards: [],
    };
  }

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.id]: value }, () => {
      this.isFormFilled();
    });
  };

  checksTrunfo = () => {
    const { cardTrunfo } = this.state;
    return cardTrunfo;
  }

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
    };
    savedCards.push(newCard);

    // Salva nova carta no estado
    this.setState({
      savedCards,
      cardName: '', // 'string'
      cardDescription: '', // 'string'
      cardAttr1: '0', // 'string'
      cardAttr2: '0', // 'string'
      cardAttr3: '0', // 'string'
      cardImage: '', // 'string'
      cardRare: 'normal', // 'string'
      cardTrunfo: false, // 'boolean'
      hasTrunfo: this.checksTrunfo(),
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
    return savedCards.map((item, index) => <Card key={ index } { ...item } />);
  }

  render() {
    const { savedCards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          checksTrunfo={ this.checksTrunfo }
        />
        <Card { ...this.state } />
        <h1>Seu baralho:</h1>
        <div id="saved-cards">
          { savedCards.length > 0 ? this.renderSavedCards() : undefined }
        </div>
      </div>
    );
  }
}

export default App;
