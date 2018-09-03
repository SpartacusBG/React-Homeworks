import React from 'react';
import Card from './card';
import AddNote from './add-note';
import { dispatch, getState, subscribe } from './redux';

class CardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { noteList: [], isNoteFormVisible: false };
        this.openNoteForm = this.openNoteForm.bind(this);
    }

    openNoteForm() {
        this.setState({ isNoteFormVisible: true })
    }

    render() {
        const { id, headingTitle, counter, noteList } = this.props;
        
        return (
            <div className="card-container">
                <div className="heading">
                    <span className="counter"> {counter} </span>
                    <p className="title">{headingTitle}</p>
                    <div className="more-info-container">
                        <span onClick={this.openNoteForm}>+</span>
                        <span>...</span>
                    </div>
                    <AddNote columnKey={id} isVisible={this.state.isNoteFormVisible} />
                </div>
                <div className="card-holder">
                    {
                        noteList.map(note =>
                            <Card key={note.id} columnKey={id} id={note.id} title={note.title} date={note.date} status={note.status} nameOfCreator={note.nameOfCreator}/>
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
