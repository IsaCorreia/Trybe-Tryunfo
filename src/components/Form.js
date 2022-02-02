import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

// data-testid="description-input"
// data-testid="attr1-input"
// data-testid="attr2-input"
// data-testid="attr3-input"
// data-testid="image-input"
// data-testid="rare-input"
// data-testid="trunfo-input"
// data-testid="save-button"

class Form extends React.Component {
  onInputChange = (event) => this.setState({ [event.target.id]: event.target.value });

  render() {
    const {
      cardName, // 'string'
      cardDescription, // 'string'
      cardAttr1, // 'string'
      cardAttr2, // 'string'
      cardAttr3, // 'string'
      cardImage, // 'string'
      cardRare, // 'string'
      cardTrunfo, // 'boolean'
      // hasTrunfo, // 'boolean'
      isSaveButtonDisabled, // 'boolean'
      // onInputChange, // 'callback'
      // onSaveButtonClick, // 'callback',
    } = this.props;

    return (
      <form className="form">

        <div className="inputs">
          <label htmlFor="name-input">
            Nome da Carta
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              onChange={ this.onInputChange }
              value={ cardName.value }
            />
          </label>
        </div>

        {/* temporariamente escondido */}
        <div>
          <Input
            labelDesc="Descrição"
            id="description-input"
            type="textarea"
            value={ cardDescription.value }
            func={ this.onInputChange }
          />
          <Input
            id="attr1-input"
            type="number"
            labelDesc="Atributo 1"
            value={ cardAttr1.value }
            func={ this.onInputChange }
          />
          <Input
            labelDesc="Atributo 2"
            id="attr2-input"
            type="number"
            value={ cardAttr2.value }
            func={ this.onInputChange }
          />
          <Input
            labelDesc="Atributo 3"
            id="attr3-input"
            type="number"
            value={ cardAttr3.value }
            func={ this.onInputChange }
          />
          <Input
            labelDesc="Imagem"
            id="image-input"
            type="text"
            value={ cardImage.value }
            func={ this.onInputChange }
          />
        </div>

        <label htmlFor="rare-input" className="inputs">
          Raridade
          <select
            id="rare-input"
            data-testid="rare-input"
            type="select"
            value={ cardRare.value }
            onChange={ this.onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <Input
          labelDesc="Super Trunfo"
          id="trunfo-input"
          type="checkbox"
          value={ cardTrunfo.value }
          func={ this.onInputChange }
        />

        <button
          type="button"
          data-testid="save-button"
          className="inputs"
          disabled={ isSaveButtonDisabled }
          onClick={ this.onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
