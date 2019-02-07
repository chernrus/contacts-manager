import React, { Component } from 'react';
import '../App.css';
import ModalCreate from './ModalCreate';
import ContactsList from './ContactsList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      contacts: this.getData() || [],
      error: null,
      createModalShow: false,
      sortField: 'name'
    };

    this.saveContact = this.saveContact.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
    this.hideCreateModal = this.hideCreateModal.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }


  isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }

  sortData(data) {
    const { sortField } = this.state,
      sortedData = data.sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });
    console.log(sortField);
    console.log(sortedData);
    return sortedData;
  }

  getData() {
    const data = window.localStorage.getItem('contacts');
    if(this.isValidJSON(data)) {
      return JSON.parse(data);
    }
    else {
      return [];
    }
  }

  setData(contacts) {
    console.log(contacts);
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  saveContact(contact) {
    let contacts = this.state.contacts;
    contacts.push(contact);
    const sortedContacts = this.sortData(contacts);
    console.log(contacts);
    console.log(sortedContacts);
    this.setData(sortedContacts);
    this.setState({
      createModalShow: false,
      contacts: sortedContacts
    });
  }

  editContact() {

  }

  removeContact() {

  }

  showCreateModal() {
    this.setState({createModalShow: true});
  }

  hideCreateModal() {
    this.setState({createModalShow: false});
  }

  render() {
    console.log('Start');
    const {
      contacts,
      error,
      createModalShow
    } = this.state;

    return (
      <div className="App">
        <h1>Contacts Manager</h1>

        <div className="contact-creator">
          <button onClick={this.showCreateModal}>New contact</button>
          {createModalShow && <ModalCreate onSave={this.saveContact} onCancel={this.hideCreateModal}/>}
        </div>
        {contacts.length !==0 &&
            <ContactsList
              contacts={ contacts }
              onEdit={this.editContact}
              onRemove={this.removeContact}
        />}
      </div>
    );
  }
}

export default App;
