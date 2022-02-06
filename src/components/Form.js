import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
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
      isSaveButtonDisabled, // boolean
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <Input
          labelDesc="Nome da Carta"
          id="cardName"
          testid="name-input"
          type="text"
          value={ cardName }
          func={ onInputChange }
        />
        <Input
          labelDesc="Descrição"
          id="cardDescription"
          testid="description-input"
          type="textarea"
          value={ cardDescription }
          func={ onInputChange }
        />
        <Input
          labelDesc="Atributo 1"
          id="cardAttr1"
          testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          func={ onInputChange }
        />
        <Input
          labelDesc="Atributo 2"
          id="cardAttr2"
          testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          func={ onInputChange }
        />
        <Input
          labelDesc="Atributo 3"
          id="cardAttr3"
          testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          func={ onInputChange }
        />
        <Input
          labelDesc="Imagem"
          id="cardImage"
          testid="image-input"
          type="text"
          value={ cardImage }
          func={ onInputChange }
        />

        <label htmlFor="cardRare" className="inputs">
          Raridade
          <select
            id="cardRare"
            data-testid="rare-input"
            type="select"
            defaultValue={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            id="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          className="inputs"
          type="button"
          disabled={ !isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
