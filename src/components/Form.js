import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      // cardRare,
      // cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.props;
    return (
      <form>
        {/* <Input id="" type="" labelDesc=""/> */}
        <Input
          id="name-input"
          type="text"
          labelDesc="Nome da Carta"
          value={ cardName }
        />
        <Input
          id="description-input"
          type="textarea"
          labelDesc="Descrição"
          value={ cardDescription }
        />
        <Input
          id="attr1-input"
          type="number"
          labelDesc="Atributo 1"
          value={ cardAttr1 }
        />
        <Input
          id="attr2-input"
          type="number"
          labelDesc="Atributo 2"
          value={ cardAttr2 }
        />
        <Input
          id="attr3-input"
          type="number"
          labelDesc="Atributo 3"
          value={ cardAttr3 }
        />
        <Input
          id="image-input"
          type="text"
          labelDesc="Imagem"
          value={ cardImage }
        />
        <label htmlFor="rare-input">
          Raridade
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <Input id="trunfo-input" type="checkbox" labelDesc="Super Trunfo" />

        <button type="button" data-testid="save-button">Salvar</button>

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
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // isSaveButtonDisabled: PropTypes.string.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
