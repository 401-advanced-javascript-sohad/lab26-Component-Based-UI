import React from 'react';
import './App.css';

import Header from './moduls/Header.js';
import Footer from './moduls/Footer.js';
import Main from './moduls/Main.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;