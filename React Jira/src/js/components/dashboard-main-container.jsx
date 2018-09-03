import React from 'react';
import { hot } from 'react-hot-loader';
import CardContainer from './card-container';

import { ModalContainer, ModalRoute } from 'react-router-modal';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

class DashboardMainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { columns } = this.props;
        if (!columns) {
            return null;
        }
        return (
            <React.Fragment>
                    <div>
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
