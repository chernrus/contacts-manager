import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.changeValue = this.changeValue.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  changeValue({ target: { value } }) {
    this.setState({
      value
    });
  }

  buttonClick() {
    const { onFilterChange } = this.props;
    const { value } = this.state;

    onFilterChange(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="filter-panel">
        <input
          type="text"
          value={value}
          onChange={this.changeValue}
          placeholder="Search..."
        />
        <button onClick={this.buttonClick}>Search</button>
      </div>
    )
  }
}

export default Filter;
