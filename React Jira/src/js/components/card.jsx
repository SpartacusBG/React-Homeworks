import React from 'react';
import { BrowserRouter, Link, Switch, Redirect} from 'react-router-dom';
import { dispatch, getState, subscribe } from './redux';

class Card extends React.Component  {

    constructor(props) {
        super(props);
        this.storeItemInRedux = this.storeItemInRedux.bind(this);
    }

    storeItemInRedux(props) {
        const item = props;

        const action = {
            type: 'ADD',
            item: item
          };
          dispatch(action);
    }

    render() {
        const { title, date, nameOfCreator, status, note } = this.props;
        return (
            <div className="card">
                <div className="card-heading">
                    <span>ⓘ</span>
                    <h2>{title} </h2>
                    <p>{nameOfCreator}</p>
                    
                    <Link to='/view-card' onClick={ () => {this.storeItemInRedux(this.props)} }>...</Link>
    
                </div>
                <div className="card-body">
    
                </div>
            </div>
        );
    }
}
export default Card;
