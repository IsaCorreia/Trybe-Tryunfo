import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <form>
        {/* <Input id="" type="" labelDesc=""/> */}
        <Input id="name-input" type="text" labelDesc="Nome da Carta" />
        <Input id="description-input" type="textarea" labelDesc="Descrição" />
        <Input id="attr1-input" type="number" labelDesc="Atributo 1" />
        <Input id="attr2-input" type="number" labelDesc="Atributo 2" />
        <Input id="attr3-input" type="number" labelDesc="Atributo 3" />
        <Input id="image-input" type="text" labelDesc="Imagem" />
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
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.boolean.isRequired,
  hasTrunfo: PropTypes.boolean.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
}

export default Form;
