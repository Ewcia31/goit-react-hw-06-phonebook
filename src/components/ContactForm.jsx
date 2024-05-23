import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;
    addContact({ name: name.trim(), number: number.trim() });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
