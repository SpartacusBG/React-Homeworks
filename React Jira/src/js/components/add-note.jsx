import React from 'react';
import Card from './card';
import { dispatch, getState, subscribe } from './redux';

class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = { note: '' };
        this.closeNoteForm = this.closeNoteForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.storeItemInRedux = this.storeItemInRedux.bind(this);
    }

    storeItemInRedux(props) {
        const item = props;

        const action = {
            type: 'ADD_NOTE',
            item: item
          };
          dispatch(action);
    }

    closeNoteForm(e) {
        this.setState({
             id: Math.random(),
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
            id: Math.random(),
            title: title,
            date: date,
            status: status,
            nameOfCreator: nameOfCreator,
            note: note
        };

        const obj = {
            columnId: this.props.columnKey,
            noteOb: noteOb
        };
        this.storeItemInRedux(obj)
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

