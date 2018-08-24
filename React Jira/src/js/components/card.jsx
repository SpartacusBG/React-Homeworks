import React from 'react';

export default function Card(props) {
    const { noteTitle } = props;
    return (
        <div className="card">
            <div className="card-heading">
                <span>ⓘ</span>
                <h2>{noteTitle}</h2>
                <span className="dotts">...</span>
            </div>
            <div className="card-body">
            kjsdnjfnsdkjfnkn
            </div>
        </div>
    );
}
