import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: "", // callback
      onSaveButtonClick: "", // callback
    }
  }

  handleTextAreaChange(event) {
    this.setState({ cardName: event.target.value })
  }

  render() {
    return (
      <form className="form">
        {/* <Input id="" type="" labelDesc=""/> */}
        <Input
          labelDesc="Nome da Carta"
          id="name-input"
          type="text"
          func={ this.handleTextAreaChange }
          value={ this.state.cardName }
        />
        <Input
          labelDesc="Descrição"
          id="description-input"
          type="textarea"
        />
        <Input
          id="attr1-input"
          type="number"
          labelDesc="Atributo 1"
        />
        <Input
          id="attr2-input"
          type="number"
          labelDesc="Atributo 2"
        />
        <Input
          id="attr3-input"
          type="number"
          labelDesc="Atributo 3"
        />
        <Input
          id="image-input"
          type="text"
          labelDesc="Imagem"
        />
        <label htmlFor="rare-input" className="inputs">
          Raridade
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <Input
          id="trunfo-input"
          type="checkbox"
          labelDesc="Super Trunfo"
        />

        <button
          type="button"
          data-testid="save-button"
          className="inputs"
        >Salvar</button>

      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // isSaveButtonDisabled: PropTypes.string.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
