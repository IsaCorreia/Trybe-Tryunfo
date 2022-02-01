import React from 'react';
import Form from './components/Form';

const properties = {
  cardName: 'string',
  cardDescription: 'string',
  cardAttr1: '1',
  cardAttr2: '2',
  cardAttr3: '3',
  cardImage: 'string',
  cardRare: 'string',
  cardTrunfo: false,
  // hasTrunfo: false,
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...properties } />
      </div>
    );
  }
}

export default App;
