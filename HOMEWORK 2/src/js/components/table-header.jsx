import React from 'react';

class TableHeader extends React.Component {

    constructor(props) {
        super(props)

        this.sortTable = this.props.sortTable;
    }

    render() {

        return (

            <thead>
                <tr>
                    <th >HR Information</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <th>
                        <div className="thead-container">
                            <div className="thead-content">
                                Position
                            </div>
                            <div className="arrow-container">
                                <i className="arrow up" onClick={() => this.sortTable('position', -1) }></i>
                                <i className="arrow down" onClick={() => this.sortTable('position', 1) }></i>
                            </div>

                        </div>
                    </th>
                    <th>
                        <div className="thead-container">
                            <div className="thead-content">
                                Salary
                            </div>
                            <div className="arrow-container">
                                <i className="arrow up" onClick={() => this.sortTable('salary', -1) }></i>
                                <i className="arrow down" onClick={() => this.sortTable('salary', 1) }></i>
                            </div>

                        </div>
                    </th>
                    <th>
                        <div className="thead-container">
                            <div className="thead-content">
                                Office
                            </div>
                            <div className="arrow-container">
                                <i className="arrow up" onClick={() => this.sortTable('office', -1) }></i>
                                <i className="arrow down" onClick={() => this.sortTable('office', 1) }></i>
                            </div>

                        </div>
                    </th>
                    <th>
                        <div className="thead-container">
                            <div className="thead-content">
                                Extn.
                            </div>
                            <div className="arrow-container">
                                <i className="arrow up" onClick={() => this.sortTable('extensionNumber', -1) }></i>
                                <i className="arrow down" onClick={() => this.sortTable('extensionNumber', 1) }></i>
                            </div>

                        </div>
                    </th>
                </tr>
            </thead>

        );

    }
}

export default TableHeader;