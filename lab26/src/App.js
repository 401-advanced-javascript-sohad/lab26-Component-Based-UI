import React from 'react';
import './App.css';

// dummy component - it is also a functional component
const Header = () => {
  return (
    <header className="words-app">
      <h1>counter App React Land</h1>
    </header>
  )
}
// also a dummy component and functional component
const Footer = () => {
  return (
    <footer>my cool footer</footer>
  )
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      counter: 0
    }
  }

  handleClickIncrement = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });

  }

  handleClickDecrement = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });

  }

  render() {
    return (
      <section>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleClickIncrement}>click for Increment</button>
        <button onClick={this.handleClickDecrement}>click for Decrement</button>
       </section>
    )
  }
}
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