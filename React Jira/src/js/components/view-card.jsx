import React from 'react';
import Card from './card';
import { dispatch, getState, subscribe } from './redux';


class ViewCard extends React.Component {

    constructor(props) {
        super(props);
    }

  

    render() {
        const { viewItem } = getState();
        if (!viewItem) return null;
        return (
            <div>
                <p> {viewItem.title}</p>
                <p> {viewItem.date}</p>
                <p> {viewItem.nameOfCreator}</p>
                <p> {viewItem.status}</p>
                <p> {viewItem.note}</p>
            </div>
        )
    }

    componentDidMount() {
        subscribe(this.forceUpdate.bind(this));
      }

      componentWillUnmount() {
        const action = {
            type: 'ADD',
            item: null
          };
          dispatch(action);
    }
}

export default ViewCard;

ViewCard.defaultProps = {
    // addNote: function,
    isVisible: false
};

