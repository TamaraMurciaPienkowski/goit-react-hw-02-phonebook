import React, { Component } from 'react';
import css from './contactForm.module.css';

const INITIAL_STATE = {
  contactName: '',
  contactNumber: '',
};

class ContactForm extends Component {
  state = {
    contactName: '',
    contactNumber: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  hadleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <form className={css.contactForm} onSubmit={this.hadleSubmit}>
          <label className={css.contactFormLabel}>
            Name
            <input
              className={css.contactFormInput}
              type="text"
              name="contactName"
              value={this.state.contactName}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.contactFormLabel}>
            Number
            <input
              className={css.contactFormInput}
              type="tel"
              name="contactNumber"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.contactNumber}
              onChange={this.handleChange}
            />
          </label>
          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
