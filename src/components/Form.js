import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();

    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {

    };
  }

  onInputChange(event) {
    this.setState({ [event.target.value]: event.target.value });
  }

  onSaveButtonClick(event) {
    console.log(event.target);
  }

  isSaveButtonDisabled() {
    return true;
  }

  render() {
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
    } = this.props;

    return (
      <form className="form">
        {/* <Input id="" type="" labelDesc=""/> */}
        <Input
          labelDesc="Nome da Carta"
          id="name-input"
          type="text"
          value={ cardName }
          func={ this.onInputChange }
        />
        <Input
          labelDesc="Descrição"
          id="description-input"
          type="textarea"
          value={ cardDescription }
          func={ this.onInputChange }
        />
        <Input
          id="attr1-input"
          type="number"
          labelDesc="Atributo 1"
          value={ cardAttr1 }
          func={ this.onInputChange }
        />
        <Input
          labelDesc="Atributo 2"
          id="attr2-input"
          type="number"
          value={ cardAttr2 }
          func={ this.onInputChange }
        />
        <Input
          labelDesc="Atributo 3"
          id="attr3-input"
          type="number"
          value={ cardAttr3 }
          func={ this.onInputChange }
        />
        <Input
          labelDesc="Imagem"
          id="image-input"
          type="text"
          value={ cardImage }
          func={ this.onInputChange }
        />
        <label htmlFor="rare-input" className="inputs">
          Raridade
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
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
          value={ cardTrunfo }
          func={ this.onInputChange }
        />

        <button
          type="button"
          data-testid="save-button"
          className="inputs"
          { ...this.isSaveButtonDisabled }
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
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
