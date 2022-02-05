import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

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
      isSaveButtonDisabled: false, // 'boolean'
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSaveButtonClick = () => { console.log('onSaveButtonClick'); };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
