import React from 'react';
import { hot } from 'react-hot-loader';
import CardContainer from './card-container';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { dispatch, getState, subscribe } from './redux';

class DashboardMainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: '' };
        this.filterCards = this.filterCards.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    filterCards(searchString) {
        const action = {
            type: 'STORE_FILTER',
            filter: searchString
        };
        dispatch(action);
    }

    handleChange({ target }) {
        if (target) {
            this.filterCards(target.value);
            const name = target.name;
            this.setState({
                [name]: target.value
            });
        }
    }

    render() {
        const { columns } = this.props;
        if (!columns) {
            return null;
        }
        return (
            <React.Fragment>
                    <div>

                        <div className="filter">
                            <label htmlFor="">Filter Cards:</label>
                            <input onChange={this.handleChange} name="filter" value={this.state.filter} type="text" />
                        </div>
                        <div className="card-container-holder">
                        {
                            columns.map(column =>
                                <CardContainer key={column.columnId} id={column.columnId} headingTitle={column.columnTitle} noteList={column.noteList} counter="2" />
                            )
                        }
                            <Link className="add-column" to='/create-column'>+ Add column</Link>
                            
                        </div>
                    </div>
            </React.Fragment>
        );
    }
};

export default DashboardMainContainer;
