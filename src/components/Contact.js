import React, { Component } from 'react';
import EditPanel from './EditPanel';

class Contact extends Component {

  render() {

    const { contact } = this.props;

    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.description}</td>
        <td>
          <EditPanel
            contact={ contact }
            onEdit={this.props.onEdit}
            onRemove={this.props.onRemove}/>
        </td>
      </tr>
    );
  }
}

export default Contact;
