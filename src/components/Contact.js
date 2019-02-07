import React, { Component } from 'react';
import EditPanel from './EditPanel';

class Contact extends Component {

  render() {

    const { contact, id } = this.props;

    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.description}</td>
        <td><EditPanel contact={ contact }/></td>
      </tr>
    );
  }
}

export default Contact;
