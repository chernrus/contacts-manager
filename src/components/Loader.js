import React,  { Component } from 'react';
import Spinner from './Spinner';

class Loader extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: false
    }

    this.loadData = this.loadData.bind(this);
  }

  loadData() {

    this.setState({
      isLoading: true
    });

    const { onLoad, onError } = this.props;

    let url = 'http://www.filltext.com/?delay=3&rows=50&name={firstName}~{lastName}&phone={phone|format}&id={number|1000}}&email={email}&description={lorem|6}&pretty=true;'

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          isLoading: false
        });
        onLoad(data);
      })
      .catch((error) => {
        this.setState({
          isLoading: false
        });
        onError(error.message);
      });
  }

  render() {

    const { isLoading } = this.state;

    return(
      <div className="test-block">
        {isLoading && <Spinner />}
        <div className="test-data-button">
          <button onClick={this.loadData}>Load Test Data</button>
        </div>
      </div>
    )
  }
}

export default Loader;
