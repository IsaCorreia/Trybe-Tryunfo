import React from 'react';
import Form from './components/Form';

const properties = {
  cardName: 'string',
  cardDescription: 'string',
  cardAttr1: 'string',
  cardAttr2: 'string',
  cardAttr3: 'string',
  cardImage: 'string',
  cardRare: 'string',
  cardTrunfo: 'boolean',
  hasTrunfo: 'boolean',
  isSaveButtonDisabled: 'boolean',
  // onInputChange: (event) => event.target.this.setState({ [event.target.id]: event.target.value }),
  // onSaveButtonClick: 'callback',
};

class App extends React.Component {
  onSaveButtonClick = (event) => {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...properties } { ...this.onInputChange } { ...this.onSaveButtonClick } />
      </div>
    );
  }
}

export default App;
