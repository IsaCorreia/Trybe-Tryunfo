import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, id, type, labelDesc, value, func } = this.props;
    return (
      <div className="inputs">
        <label htmlFor={ id }>
          { labelDesc }

          <input
            type={ type }
            id={ id }
            data-testid={ testid }
            onChange={ func }
            defaultValue={ value }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  testid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelDesc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;
