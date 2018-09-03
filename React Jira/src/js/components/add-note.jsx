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
        this.setState({
             note: '', 
             isVisible: false,
             nameOfCreator: '',
             title: '',
             date: null,
             status: '' 
            });
        
    }
    
    submitNoteForm(title, date, status, nameOfCreator, note) {
        const noteOb = {
            title: title,
            date: date,
            status: status,
            nameOfCreator: nameOfCreator,
            note: note
        };
        this.addNote(noteOb)
    }

    handleChange({ target }) {
        if (target) {
            const name = target.name;
            this.setState({
                [name]: target.value
            });
        }
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
            <label htmlFor="">Title</label>
                <input onChange={ this.handleChange } type="text" name="title" value={this.state.title}/>

                <label htmlFor="">Deadline</label>
                <input onChange={ this.handleChange } type="date" name="date" value={this.state.date} />
                <label htmlFor="">Status</label>
                <select onChange={ this.handleChange } name="status" id="" value={this.state.status}>
                    <option value="important">important</option>
                    <option value="critical">critical</option>
                    <option value="not-important">not-important</option>
                </select>

                <label htmlFor="">Name of creator</label>
                <input onChange={ this.handleChange } name="nameOfCreator" value={this.state.nameOfCreator} type="text"/>

                <textarea onChange={ this.handleChange } value={this.state.note} name="note" id="" cols="30" rows="10"></textarea>
                <button type="button" onClick={ () => this.submitNoteForm(this.state.title, this.state.date, this.state.status, this.state.nameOfCreator, this.state.note) }>Add</button>
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

