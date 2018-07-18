import React from 'react';
import { hot } from 'react-hot-loader';
import Article from './components/article';

const App = () => {
  const title = {
    en: "TiTle",
    de: 'TiTle na Nemski',
    bg: 'ZaGLavie'
  }

  const text = {
    en: "Hello World",
    de: 'Hallo Welt',
    bg: 'Ko staa brat'
  }

  const language = 'DE';

  return (
    <React.Fragment>
      <Article title={title} language={language}>
      {text}
      </Article>
    </React.Fragment>
  );
};

export default hot(module)(App);