import React from 'react';
import Form from './components/Form';

// const properties = {
//   cardName: 'string',
//   cardDescription: 'string',
//   cardAttr1: 'string',
//   cardAttr2: 'string',
//   cardAttr3: 'string',
//   cardImage: 'string',
//   cardRare: 'string',
//   cardTrunfo: 'boolean',
//   hasTrunfo: 'boolean',
//   isSaveButtonDisabled: 'boolean',
//   onInputChange: 'callback',
//   onSaveButtonClick: 'callback',
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;
