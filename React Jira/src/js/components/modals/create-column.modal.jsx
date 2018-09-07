import React from 'react';

class CreateColumnModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {comment: '', errors: false};
        this.updateColumns = this.props.updateColumns;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const text = target.value;
        if (text.match(/^\d/)) {
            this.setState({
                errors: true,
            });
            return
         }

        this.setState({
            comment: target.value,
            errors: false
        });
    }

    render() {
        const { comment, errors } = this.state;
        const isEnabled = comment.length > 2 && comment.length <= 100 && !errors;
        return (
            <div className="modal-window">
                <div className="modal-header">
                <h2>Add a column</h2>
                <span className="close-button" onClick={this.props.closeModal}>x</span>
                </div>
                <div className="modal-body">
                {
                    errors?
                    <p>Name can not start with a number</p>
                    : null
                }
                <label >Column name</label>
              
                    <input className={errors ? 'errors': null} min="2" max="100" onChange={this.handleChange} value={this.state.comment}  type="text"/>
                </div>
                <div className="modal-footer">
                    <button onClick={() => {
                        this.updateColumns(this.state.comment);
                        this.props.closeModal();
                        } }
                        disabled={!isEnabled}
                        >Create column</button>
                </div>
            </div>
        );
    }

}

export default CreateColumnModal;
