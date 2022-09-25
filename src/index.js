import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class SnackBar extends React.Component {
    setPrice(price) {
        return `$${price}`;
    }

    render() {
        return (
            <div className="snack-bar">
                <h1>Snack Bar!!!</h1>
                <h2>Items offered for sale include:</h2>
                <ul>
                    <li>Hot Chocolate - {this.setPrice('2.50')}</li>
                    <li>Snickers Bar - {this.setPrice('1.50')}</li>
                    <li>Skittles - {this.setPrice('1.00')}</li>
                </ul>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
        <button className="square">
            {/* TODO */}
        </button>
        );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <h1>Tic Tac Toe!!!</h1>
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <Game />
                <SnackBar />
            </div>
        );
    }
}
  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
  