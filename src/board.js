import React from 'react';
import Square from './square';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			XisNext: true
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = this.state.XisNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			XisNext: !this.state.XisNext
		});
	}

	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
	}

	render(i) {
		return (
			<div className="board">
				<div className="board-row row-1">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row row-2">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row row-3">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;
