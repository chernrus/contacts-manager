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

  showEditModal(event) {
    this.setState({modalEditShow: true});
  }

  hideEditeModal(event) {
    if(event.target.className === 'modal' || event.target.className === 'modal-button') {
      this.setState({modalEditShow: false});
    }
  }

  editContact(contact) {
    const { onEdit } = this.props;
    onEdit(contact);
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
        <span className="fas fa-pen icon-button" onClick={this.showEditModal}></span>
        <div className="dropdown">
          <span className="fas fa-ellipsis-v icon-button" onClick={this.dropMenu}></span>
          {isDropdown && <div className="dropdown-content">
            <div className="dropdown-item" onClick={this.removeContact}>
              <span className="far fa-trash-alt icon-button"></span>
              <div className="dropdown-item-text">Remove</div>
            </div>
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
