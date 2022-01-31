import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type, labelDesc, func } = this.props;
    return (
      <div className="inputs">
        <label htmlFor={ id }>
          { labelDesc }

          <input
            type={ type }
            id={ id }
            data-testid={ id }
            onChange={func}
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelDesc: PropTypes.string.isRequired,
};

export default Input;
