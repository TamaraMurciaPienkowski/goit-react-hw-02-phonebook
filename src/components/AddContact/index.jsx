import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class AddContact extends Component {
  state = {
    contacts: [
      { id: 'id-1', contactName: 'Rosie Simpson', contactNumber: '459-12-56' },
      { id: 'id-2', contactName: 'Hermione Kline', contactNumber: '443-89-12' },
      { id: 'id-3', contactName: 'Eden Clements', contactNumber: '645-17-79' },
      { id: 'id-4', contactName: 'Annie Copeland', contactNumber: '227-91-26' },
    ],
    filter: '',
    contactName: '',
    contactNumber: '',
  };

  addContact = newContact => {
    let existedContact = this.state.contacts.some(
      contact =>
        contact.contactName === newContact.contactName &&
        contact.contactNumber === newContact.contactNumber
    );
    if (existedContact) {
      Notify.warning('This contact already exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = index => {
    console.log(index);
    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(index, 1);
      return { contacts: updatedContacts };
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <ContactForm addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default AddContact;
