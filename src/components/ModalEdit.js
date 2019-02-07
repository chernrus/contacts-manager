import React, { Component } from 'react';
import ReactDOM from "react-dom";

class ModalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      name: props.contact.name,
      phone: props.contact.phone,
      email: props.contact.email,
      description: props.contact.description
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }
  //
  checkFormData() {
    const modal = ReactDOM.findDOMNode(this),
      inputsColection = modal.querySelectorAll('.modal-input');

    let isEmpty = true;

    for(var i = 0; i < inputsColection.length; i++) {
      if(inputsColection[i].value.length !==0) return false;
    }

    return true;
  }

  handleInputChange(event) {
    const target = event.target,
      value = target.value,
      name = target.name,
      isEmpty = this.checkFormData();

    this.setState({
      [name]: value,
      isEmpty: isEmpty
    });
  }

  cancel() {
    const { onCancel } = this.props;
    onCancel();
  }

  save() {
    const { onSave } = this.props,
      {
        name,
        phone,
        email,
        description,
      } = this.state;

    onSave({
      name: name || '',
      phone: phone || '',
      email: email || '',
      description: description || '',
    });
  }

  render() {
    const { isEmpty } = this.state;
    const { contact } = this.props;

    return (
      <div className="modal modal-edit">
        <div className="modal-content">
          <form className="modal-form">
            <label className="modal-label">
              Name
              <input
                className="modal-input"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}/>
            </label>
            <label className="modal-label">
              Phone
              <input
                className="modal-input"
                name="phone"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.phone}/>
            </label>
            <label className="modal-label">
              Email
              <input
                className="modal-input"
                name="email"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.email}/>
            </label>
            <label className="modal-label">
              Description
              <textarea
                className="modal-input"
                name="description"
                onChange={this.handleInputChange}
                value={this.state.description}/>
            </label>
            <div className="modal-content__confirm-buttons">
              <button type="button" onClick={this.cancel}>Cancel</button>
              <button type="button" disabled={isEmpty} onClick={this.save}>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalEdit;
