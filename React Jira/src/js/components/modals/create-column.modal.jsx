import React from 'react';

class CreateColumnModal extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {comment: ''};
        this.updateColumns = this.props.updateColumns;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            comment: target.value
        });
    }



    render() {
        return (
            <div className="modal-window">
                <div className="modal-header">
                <h2>Add a column</h2>
                <span className="close-button" onClick={this.props.closeModal}>x</span>
                </div>
                <div className="modal-body">
                <label>Column name</label>
                    <input onChange={this.handleChange} value={this.state.comment}  type="text"/>
                </div>
                <div className="modal-footer">
                    <button onClick={() => {
                        this.updateColumns(this.state.comment);
                        this.props.closeModal();
                        } }>Create column</button>
                </div>
            </div>
        );
    }

}

export default CreateColumnModal;
