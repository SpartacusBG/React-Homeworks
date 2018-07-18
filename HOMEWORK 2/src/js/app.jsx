import React from 'react';
import { hot } from 'react-hot-loader';
import  RecordsTable  from './components/records-table';

class App extends React.Component {
  recordsData;
  
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };

    this.fetchData()
  }
  

  fetchData() {
    fetch('data/records.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (!data || !data.arr || !data.arr.length) {
        throw new Error('No data')
      }
      this.setState({
        records: data.arr
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    if (!this.state.records || !this.state.records.length) {
      return null;
    }

    const { records } = this.state;

    return (
      <React.Fragment>
        <RecordsTable records={ records } />
      </React.Fragment>
    );
  }
};

export default hot(module)(App);