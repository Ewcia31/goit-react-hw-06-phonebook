import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Search Contacts"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
