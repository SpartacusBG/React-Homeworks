import React from 'react';

export default function TableRow({ record }) {
    return (

        <tr>
            <td>{ record.position }</td>
            <td>{ record.currency } { record.salary }</td>
            <td>{ record.office }</td>
            <td>{ record.extensionNumber }</td>
        </tr>

    );
}