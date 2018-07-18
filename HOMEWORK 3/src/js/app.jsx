import React from 'react';
import { hot } from 'react-hot-loader';
import CardContainer from './components/card-container';
import { getStarWarsCharacters } from './services/star-wars.service';

class App extends React.Component {
  recordsData;

  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      currentPage: 1
    };
    this.handleChildClick = this.handleChildClick.bind(this)

  }

  getStarWarsCharactersByPage(page) {
    if (page <= 0) {
      return;
    }
    getStarWarsCharacters(page)
      .then(data => {
        this.setState({
          characters: data.results,
          currentPage: page,
        });
      })
      .catch(() => {
      })
  }

  handleChildClick(currentPage, preservedCharacters) {
    if (currentPage && !preservedCharacters) {
      this.getStarWarsCharactersByPage(currentPage);
    } else {
      this.setState(
        { 
          currentPage: currentPage,
          characters: preservedCharacters 
        })
    }
  }

  render() {
    const { characters, currentPage } = this.state;
    return (
      <React.Fragment>
        <CardContainer onClick={this.handleChildClick} cardList={characters} currentPage={currentPage} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getStarWarsCharactersByPage(this.state.currentPage);
  }

};

export default hot(module)(App);