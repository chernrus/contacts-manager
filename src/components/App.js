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
      createModalShow: false
    };

    this.saveContact = this.saveContact.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
    this.hideCreateModal = this.hideCreateModal.bind(this);
  }


  isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
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
    console.log(contacts);
    this.setData(contacts);
    this.setState({
      createModalShow: false,
      contacts: contacts
    });
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
        {contacts.length !==0 && <ContactsList contacts={ contacts }/>}
      </div>
    );
  }
}

export default App;
