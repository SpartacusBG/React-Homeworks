import React from 'react';
import { hot } from 'react-hot-loader';
import TableRow from './table-row';
import TableHeader from './table-header';

class RecordsTable extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            records: this.props.records
        }

        this.sortTable = this.sortTable.bind(this);
        this.dynamicSort = this.dynamicSort.bind(this);
    }

    sortTable(col, sortOrder) {
        const { records } = this.state;
        const column = col;
        records.sort(this.dynamicSort(column, sortOrder));
        this.setState({
            records: records
          }); 
    }

    dynamicSort(property, sortOrder) {
        var sortOrder = sortOrder;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    render() {
        const { records } = this.state;
        return (
            <div>
                <table>
                   <TableHeader sortTable={this.sortTable}/>
                    <tbody>
                        {
                            records.map(record =>
                                <TableRow
                                    key={record.extensionNumber}
                                    record={record}
                                />
                            )
                        }
                    </tbody>

                </table>
            </div>
        );
    }
};

export default RecordsTable;