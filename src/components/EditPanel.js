import React, { Component } from 'react';
import ModalEdit from './ModalEdit';

class EditPanel extends Component {

  constructor() {
    super();

    this.state = {
      modalEditShow: false,
      isDropdown: false
    }

    this.showEditModal = this.showEditModal.bind(this);
    this.hideEditeModal = this.hideEditeModal.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.dropMenu = this.dropMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showEditModal() {
    this.setState({modalEditShow: true});
  }

  hideEditeModal() {
    this.setState({modalEditShow: false});
  }

  editContact(contact) {
    const { onEdit } = this.props;
    onEdit(contact);
    this.hideEditeModal();
  }

  removeContact() {
    const { onRemove } = this.props;

    onRemove(this.props.contact.id);
  }

  dropMenu(event) {
    event.preventDefault();
    this.setState({ isDropdown: true }, () => {
        document.addEventListener('click', this.hideMenu);
      }
    )
  }

  hideMenu() {
    this.setState({ isDropdown: false }, () => {
      document.removeEventListener('click', this.hideMenu);
    });
  }

  render() {

    const { contact } = this.props,
      { modalEditShow, isDropdown } = this.state;

    return (
      <div className="edit-panel">
        <button onClick={this.showEditModal}>Edit</button>
        <div className="dropdown">
          <button onClick={this.dropMenu} className="dropdown-button">Menu</button>
          {isDropdown && <div className="dropdown-content">
            <button onClick={this.removeContact} className="dropdown-button">Delete</button>
          </div>}
        </div>
        {modalEditShow && <ModalEdit contact={ contact }
          onCancel={this.hideEditeModal}
          onEdit={this.editContact}/>}
      </div>
    );
  }
}

export default EditPanel;
