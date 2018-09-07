import React from 'react';
import { BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import { dispatch, getState, subscribe } from './redux';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isMenuOpened: false }
        this.storeItemInRedux = this.storeItemInRedux.bind(this);
        this.deleteFromReduxStore = this.deleteFromReduxStore.bind(this);
        this.openDetailsMenu = this.openDetailsMenu.bind(this);
        this.moveToAnotherColumn = this.moveToAnotherColumn.bind(this);
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

    openDetailsMenu() {
        const val = this.state.isMenuOpened;
        this.setState({ isMenuOpened: !val });
    }

    moveToAnotherColumn(columnId ,props) {
        const item = props;
        const action = {
            type: 'MOVE_TO_ANOTHER_COLUMN',
            item: item,
            selectedColumnId: columnId
        };
        dispatch(action);
    }

    render() {
        const { columnKey, title, date, nameOfCreator, status, note } = this.props;
        const { isMenuOpened } = this.state;
        const { columnList } = getState();
        return (

            title ?
                <div className="card">
                    <div className="card-heading clearfix">
                        <span className="float-left">ⓘ</span>
                        <h2 className="float-left">
                            <Link to='/view-card' onClick={() => { this.storeItemInRedux(this.props) }}>
                                {title}
                            </Link>
                        </h2>
                        <div className="float-right dotts-container">
                            <p className="dotts" onClick={this.openDetailsMenu}> ...</p>
                            {
                                isMenuOpened ?
                                    <ul className="details">
                                        <li onClick={() => { this.deleteFromReduxStore(this.props) }}>Delete</li>
                                        <li>
                                            <Link to='/view-card' onClick={() => { this.storeItemInRedux(this.props) }}> Details</Link>
                                        </li>
                                        <li>
                                            <p>
                                                Move to:
                                                <ul>
                                                    {
                                                        columnList.map(
                                                            column => 
                                                            <li key={column.columnId} onClick={() => {this.moveToAnotherColumn(column.columnId, this.props)}}>
                                                                {
                                                                    (column.columnId !== columnKey)?
                                                                        <span>{column.columnTitle}</span>
                                                                    : null
                                                                }
                                                            </li>
                                                        )
                                                    }
                                                    
                                                </ul>
                                            </p>
                                        </li>
                                    </ul>
                                    : null
                            }

                        </div>

                    </div>
                    <div className="card-body">
                        <p>{nameOfCreator}</p>
                    </div>
                </div>

                : null
        );
    }
}
export default Card;
