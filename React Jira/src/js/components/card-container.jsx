import React from 'react';
import Card from './card';
import AddNote from './add-note';

class CardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { noteList: [], isNoteFormVisible: false };
        this.addNote = this.addNote.bind(this);
        this.openNoteForm = this.openNoteForm.bind(this);
    }

    addNote(note) {
        if (note) {
            const noteList = this.state.noteList;
            noteList.push(note);
            this.setState({ noteList });
        }
    }

    openNoteForm() {
        this.setState({ isNoteFormVisible: true })
    }

    render() {
        const { headingTitle, counter } = this.props;
        return (
            <div className="card-container">
                <div className="heading">
                    <span className="counter"> {counter} </span>
                    <p className="title">{headingTitle}</p>
                    <div className="more-info-container">
                        <span onClick={this.openNoteForm}>+</span>
                        <span>...</span>
                    </div>
                    <AddNote addNote={this.addNote} isVisible={this.state.isNoteFormVisible} />
                </div>
                <div className="card-holder">
                    {
                        this.state.noteList.map(note =>
                            <Card noteTitle={note} />
                        )
                    }
                    <Card />
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
    }
}

export default CardContainer;

CardContainer.defaultProps = {
    headingTitle: '',
    counter: 1
};
