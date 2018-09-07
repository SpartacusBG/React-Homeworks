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
                <p>Title:  {viewItem.title}</p>
                <p>Date:  {viewItem.date}</p>
                <p>Name of Creator:  {viewItem.nameOfCreator}</p>
                <p>Status:  {viewItem.status}</p>
                <p>Note: {viewItem.note}</p>
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

