import React,  { Component } from 'react';

class ErrorMessage extends Component {

  render() {
    const { error } = this.props;

    return(
      <div className='Error-message'>
        <div>Ошибка: {error}</div>
      </div>
    )
  }
}

export default ErrorMessage;
