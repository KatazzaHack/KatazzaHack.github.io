import React from 'react';
import './Game.css';
import Graph from './Graph';

class Game extends React.Component {
  constructor(props)  {
    super(props);
  }

  render() {
    return <div id="game-container" class="main" width="100" height="100" onGameEnd={() => alert()}> Game should be here </div>;
  }

  componentDidMount() {
    this.graph = new Graph();
    this.graph.start();
  }
}

export default Game;
