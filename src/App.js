import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.isFormFilled = this.isFormFilled.bind(this);

    this.state = {
      cardName: '', // 'string'
      cardDescription: '', // 'string'
      cardAttr1: '', // 'string'
      cardAttr2: '', // 'string'
      cardAttr3: '', // 'string'
      cardImage: '', // 'string'
      cardRare: '', // 'string'
      cardTrunfo: false, // 'boolean'
      // hasTrunfo, // 'boolean'
      isSaveButtonDisabled: true, // 'boolean'
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    this.isFormFilled();
  };
  
  componentDidUpdate() {
  }

  onSaveButtonClick = () => { console.log('onSaveButtonClick'); };

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
      cardAttr3: (cardAttr3 >= 0 && cardAttr1 <= MAX_NUMBER_FOR_ATTR) || false,
      cardAttr2: (cardAttr2 >= 0 && cardAttr1 <= MAX_NUMBER_FOR_ATTR) || false,
      cardAttrSum: cardAttrSumValue <= MAX_NUMBER_FOR_ATTR_SUM || false,
      cardImage: cardImage.length > 0 || false,
    };
    const statesBool = Object.values(states).every((item) => item === true);
    // console.log(`valor final: ${statesBool}`);
    this.setState({ isSaveButtonDisabled: !statesBool });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          // isFormFilled={ this.isFormFilled }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
