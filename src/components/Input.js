import React from 'react';

class Input extends React.Component {
  render() {
    const { id, type, labelDesc } = this.props
    return (
      <>
        <label htmlFor={ id }>
          { labelDesc }
          <input type={ type } id={ id } data-testid={ id } />
        </label>
        <br/>
      </>
    );
  }
}

export default Input;
