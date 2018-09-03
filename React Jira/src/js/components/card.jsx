import React from 'react';
import { BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import { dispatch, getState, subscribe } from './redux';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.storeItemInRedux = this.storeItemInRedux.bind(this);
        this.deleteFromReduxStore = this.deleteFromReduxStore.bind(this);
    }

    storeItemInRedux(props) {
        const item = props;

        const action = {
            type: 'VIEW',
            item: item
        };
        dispatch(action);
    }

    deleteFromReduxStore(props) {
        const item = props;
        const action = {
            type: 'DELETE',
            item: item
        };
        dispatch(action);
    }

    render() {
        const { columnKey, title, date, nameOfCreator, status, note } = this.props;
        return (
            <div className="card">
                <div className="card-heading">
                    <span>ⓘ</span>
                    <h2>
                        <Link to='/view-card' onClick={() => { this.storeItemInRedux(this.props) }}>
                            {title}
                        </Link>
                    </h2>
                    <p>{nameOfCreator}</p>

                    <div>
                        <p> ...</p>
                        <ul>
                            <li onClick={() => { this.deleteFromReduxStore(this.props) }}>delete</li>
                            <li>
                                <Link to='/view-card' onClick={() => { this.storeItemInRedux(this.props) }}> details</Link>
                            </li>
                        </ul>
                       
                        </div>

                </div>
                <div className="card-body">

                </div>
            </div>
        );
    }
}
export default Card;
