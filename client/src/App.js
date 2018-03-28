import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { words: [] }

  // Fetch words after first mount
  componentDidMount() {
    this.getWord();
  }

  getWord = () => {
    // Get the words and store them in state
    fetch('/api/words')
      .then(res => res.json())
      .then(words => this.setState({ words }));
  }

  render() {
    const { words } = this.state;

    return (
      <div className="App">
        {/* Render the words if we have them */}
        {words.length ? (
          <div>
            <h1>5 words.</h1>
            <ul className="words">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of words, and they never
                change positions in the array.
              */}
              {words.map((word, index) =>
                <li key={index}>
                  {word}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getWord}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No words :(</h1>
            <button
              className="more"
              onClick={this.getWord}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;