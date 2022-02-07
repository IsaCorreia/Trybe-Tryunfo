import React,
{ Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { testid, id, type, checked, onChange } = this.props;
    return (
      <div>
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            data-testid={ testid }
            id={ id }
            type={ type }
            checked={ checked }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  testid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
