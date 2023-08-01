import React, { Component } from 'react';
import css from './contactList.module.css';

class ContactList extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  filteredContacts = () => {
    const filter = this.state.filter;
    const contacts = this.props.contacts;
    if (filter.length === 0) {
      return contacts;
    }

    return contacts.filter(
      contact => contact.contactName.toLowerCase().indexOf(filter) >= 0
    );
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h2 className={css.titel}>Contacts</h2>
        <ul>
          <input
            className={css.findContact}
            type="text"
            name="filter"
            placeholder="find contact"
            value={this.state.filter}
            onChange={this.handleChange}
          ></input>
          {this.filteredContacts().map(
            ({ contactName, contactNumber }, index) => (
              <li className={css.newContact} key={index}>
                {contactName}:{contactNumber}
                <button
                  className={css.deleteBtn}
                  onClick={() => this.props.deleteContact(index)}
                >
                  usuń
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}
export default ContactList;
