import React from 'react';
import { hot } from 'react-hot-loader';
import DashboardMainContainer from './components/dashboard-main-container';
import CreateColumnModal from './components/modals/create-column.modal';
import ViewCard from './components/view-card';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link, Switch, Route, Redirect, PropsRoute  } from 'react-router-dom';
import { dispatch, getState, subscribe } from './components/redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: [{id: 1, title: 'alo'}] }
    this.updateColumns = this.updateColumns.bind(this);
    this.storeItemInRedux = this.storeItemInRedux.bind(this);
  }

  updateColumns(data) {

    if (data) {
      const arr = this.state.columns;

      const columnObj = {
        columnId: Math.random(),
        columnTitle: data,
        noteList: []
      } 

      arr.push(columnObj)
      this.storeItemInRedux(columnObj);
    }
  }

  storeItemInRedux(column) {
    const action = {
        type: 'ADD_COLUMN',
        column: column
    };
    dispatch(action);
}

  render() {
    const { columnList } = getState();
    return (
      <React.Fragment>
        <Switch>
          <Route path="/view-card" component={ViewCard} />
          <ModalRoute 
            props={ { foo: 'bar', updateColumns: this.updateColumns} } 
            closeModal="/"
            parentPath ="/" 
            component={CreateColumnModal} 
            path='/create-column' 
            className='modal-window'
          />
          <Route path='/' render={routeProps => <DashboardMainContainer columns={columnList}/>} />
        
         
          <Redirect to="/" />
        </Switch>
        <ModalContainer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    subscribe(this.forceUpdate.bind(this));
  }
};

export default hot(module)(App);