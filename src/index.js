import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';
import registerServiceWorker from './registerServiceWorker';

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			xIsNext: true
		};
	}

	calculateWinner(squares) {
		const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	handleClick(i) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (this.calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			xIsNext: !this.state.xIsNext
		});
	}

	render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		console.log(this.state.history.squares);
		const winner = this.calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? 'Move #' + move : 'Game Start';
			return (
				<li>
					<a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
				</li>
			);
		});

		let status;
		let bodyClass;

		if (winner) {
			status = 'Winner: ' + winner;
			bodyClass = 'board game-over';
		} else {
			status = 'Next Player ' + (this.state.xIsNext ? 'X' : 'O');
			bodyClass = 'board game-on';
		}

		return (
			<div>
				<Board squares={current.squares} onClick={i => this.handleClick(i)} bodyClass={bodyClass} />
				<div className="game-info">
					<div className="status">{status}</div>
					<ol className="moves">{moves}</ol>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Game />, document.getElementById('root'));

registerServiceWorker();
