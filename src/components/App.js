import React, { Component } from 'react';
import '../styles/App.css';
import ModalCreate from './ModalCreate';
import ContactsList from './ContactsList';
import Filter from './Filter';

// generate test data link http://www.filltext.com/?rows=10&name={firstName}~{lastName}&phone={phone|format}&id={number|1000}}&email={email}&description={lorem|6}&pretty=true

class App extends Component {

  constructor() {
    super();

    this.state = {
      contacts: this.getData() || [],
      createModalShow: false,
      sortField: 'name',
      filter: ''
    };

    this.saveContact = this.saveContact.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
    this.hideCreateModal = this.hideCreateModal.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
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

    return sortedData;
  }

  onFilterChange(filterString) {
    this.setState({
      filter: filterString,
      offset: 0
    });
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
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  saveContact(contact) {
    let contacts = this.state.contacts;
    contacts.push(contact);

    const sortedContacts = this.sortData(contacts);

    this.setData(sortedContacts);
    this.setState({
      createModalShow: false,
      contacts: sortedContacts
    });
  }

  editContact(contact) {
    let contacts = this.state.contacts,
      foundIndex = contacts.findIndex(x => x.id === contact.id);

    contacts[foundIndex] = contact;

    const sortedContacts = this.sortData(contacts);
    this.setData(sortedContacts);
    this.setState({
      contacts: sortedContacts
    });
  }

  removeContact(id) {
    let contacts = this.state.contacts,
      foundIndex = contacts.findIndex(x => x.id === id);

    contacts.splice(foundIndex, 1)

    this.setData(contacts);
    this.setState({
      contacts: contacts
    });
  }

  showCreateModal(event) {
    // event.preventDefault();
    this.setState({createModalShow: true});

  }

  hideCreateModal(event) {
    if(event.target.className === 'modal' || event.target.className === 'modal-button') {
      this.setState({createModalShow: false});
    }
  }

  render() {
    const {
        contacts,
        createModalShow
      } = this.state,
      filteredContacts = contacts.filter(dataItem => {
        return Object.values(dataItem).toString().toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
      });

    return (
      <div className="App">
        <div className="app-header">
          <div className="app-header-title">Contacts Manager</div>
          <div className="contact-creator">
            <button onClick={this.showCreateModal}>New contact</button>
            {createModalShow && <ModalCreate onSave={this.saveContact} onCancel={this.hideCreateModal}/>}
          </div>
          <Filter onFilterChange={this.onFilterChange} />
        </div>
        {filteredContacts.length !==0 &&
            <ContactsList
              contacts={ filteredContacts }
              onEdit={this.editContact}
              onRemove={this.removeContact}
        />}
      </div>
    );
  }
}

export default App;
