import React from 'react';
import Card from './card';

class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: '' };
        this.closeNoteForm = this.closeNoteForm.bind(this);
        this.addNote = this.props.addNote;
        this.handleChange = this.handleChange.bind(this);
    }

    closeNoteForm(e) {
        this.setState({ note: '', isVisible: false });
        
    }
    
    submitNoteForm(note) {
        this.addNote(note)
    }

    handleChange({ target }) {
        this.setState({
            note: target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if ( !nextProps) return;

        const { isVisible } = nextProps;
        this.setState({ isVisible })
    }

    render() {
        return (
        this.state.isVisible ? 
          <React.Fragment>
            <form action="" className="note-form">
                <textarea onChange={ this.handleChange } value={this.state.note} name="" id="" cols="30" rows="10"></textarea>
                <button type="button" onClick={ () => this.submitNoteForm(this.state.note) }>Add</button>
                <button onClick={ this.closeNoteForm } >Cancel</button>
            </form>
          </React.Fragment>

          : null
        );
    }
}

export default AddNote;

AddNote.defaultProps = {
    // addNote: function,
    isVisible: false
};

