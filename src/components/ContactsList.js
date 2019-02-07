import React, { Component } from 'react';
import Contact from './Contact';

class ContactsList extends Component {

  createThead(contact) {
    console.log(contact);

    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Description</th>
        </tr>
      </thead>
    );
  }

  createTbody(contacts) {
    console.log(contacts);

    let trows = [];

    contacts.forEach((item, i) => {
      trows.push(
        <Contact key={i} contact={item} id={i} />
      )
    });

    return (
      <tbody>
        {trows}
      </tbody>
    );
  }

  render() {

    const { contacts } = this.props,
      theadList = this.createThead(contacts[0]),
      tbodyList = this.createTbody(contacts);



    return (
      <div className="contact-list">
        <table>
          {theadList}
          {tbodyList}
        </table>
      </div>
    );
  }
}

export default ContactsList;
