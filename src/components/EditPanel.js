import React, { Component } from 'react';
import ModalEdit from './ModalEdit';

class EditPanel extends Component {

  constructor() {
    super();

    this.state = {
      modalEditShow: false
    }

    this.showEditModal = this.showEditModal.bind(this);
    this.hideEditeModal = this.hideEditeModal.bind(this);
  }

  showEditModal() {
    this.setState({modalEditShow: true});
  }

  hideEditeModal() {
    this.setState({modalEditShow: false});
  }


  render() {

    const { contact } = this.props,
      { modalEditShow } = this.state;

    return (
      <div className="edit-panel">
        <button onClick={this.showEditModal}>Edit</button>
        <button>Menu</button>
        {modalEditShow && <ModalEdit contact={ contact } onCancel={this.hideEditeModal}/>}
      </div>
    );
  }
}

export default EditPanel;
