import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        {/* <Input id="" type="" labelDesc=""/> */}
        <Input id="name-input" type="text" labelDesc="Nome da Carta"/>
        <Input id="description-input" type="textarea" labelDesc="Descrição"/>
        <Input id="attr1-input" type="number" labelDesc="Atributo 1"/>
        <Input id="attr2-input" type="number" labelDesc="Atributo 2"/>
        <Input id="attr3-input" type="number" labelDesc="Atributo 3"/>
        <Input id="image-input" type="text" labelDesc="Imagem"/>
        <label htmlFor="rare-input">
          Raridade
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <Input id="trunfo-input" type="checkbox" labelDesc="Super Trunfo"/>

        <button type="button" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
