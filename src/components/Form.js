import React from 'react';

class Form extends React.Component {
  render () {
    return (
      <form>
        <label>Nome da Carta
          <input type="text" data-testid="name-input" />
        </label>

        <label>Descrição
          <input type="textarea" data-testid="description-input" />
        </label>

        <label>Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>

        <label>Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>

        <label>Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>

        <label>Imagem
          <input type="text" data-testid="image-input" />
        </label>

        <label>Raridade
          <select data-testid="rare-input"> 
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label>
          <input type="checkbox" data-testid="trunfo-input" />
          Super Trunfo
        </label>

        <button data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;