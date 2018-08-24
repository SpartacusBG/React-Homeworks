import React from 'react';
import { hot } from 'react-hot-loader';
import DashboardMainContainer from './components/dashboard-main-container';
import CreateColumnModal from './components/modals/create-column.modal';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: ['dfgf'] }
    this.updateColumns = this.updateColumns.bind(this);
  }

  updateColumns(data) {

    if (data) {
      const arr = this.state.columns;
      arr.push(data)
      this.setState({columns: arr})
      console.log(this.state)
    }
  }

  render() {
    return (
      <React.Fragment>
        <DashboardMainContainer columns={this.state.columns}/>
        <Switch>
          <Route path="/" component={DashboardMainContainer} exact />
          <ModalRoute 
            props={ { foo: 'bar', updateColumns: this.updateColumns} } 
            closeModal="/" 
            parentPath ="/" 
            component={CreateColumnModal} 
            path='/create-column' 
            className='modal-window'
            
          />
        </Switch>
        <ModalContainer />
      </React.Fragment>
    );
  }
};

export default hot(module)(App);