import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
class App extends React.Component {
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" />
        <Card card="🎉" feedback="justMatched" />
        <Card card="💖" feedback="justMismatched" />
        <Card card="🎩" feedback="visible" />
        <Card card="🐶" feedback="hidden" />
        <Card card="🐱" feedback="justMatched" />
      </div>
    )
  }
}

export default App; 