import React, { Component } from 'react';
import EditPanel from './EditPanel';

class Contact extends Component {

  render() {

    const { contact } = this.props;

    return (
      <tr>
        <td className="table-cell">{contact.name}</td>
        <td className="table-cell">{contact.phone}</td>
        <td className="table-cell">{contact.email}</td>
        <td className="table-cell">{contact.description}</td>
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
