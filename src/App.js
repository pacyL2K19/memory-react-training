import React from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
class App extends React.Component {
  handleCardClicked (card) {
    console.log(card, 'Clicked')
  }
  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick = {this.handleCardClicked}/>
        <Card card="🎉" feedback="justMatched" onClick = {this.handleCardClicked}/>
        <Card card="💖" feedback="justMismatched" onClick = {this.handleCardClicked}/>
        <Card card="🎩" feedback="visible" onClick = {this.handleCardClicked}/>
        <Card card="🐶" feedback="hidden" onClick = {this.handleCardClicked}/>
        <Card card="🐱" feedback="justMatched" onClick = {this.handleCardClicked}/>
        {won && <p>Gagne</p>}
      </div>
    )
  }
}
export default App;