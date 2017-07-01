import React from 'react';
import Square from './square';

class Board extends React.Component {
	render(i) {
		return (
			<div className="board">
				<div className="board-row row-1">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="board-row row-2">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="board-row row-3">
					<Square />
					<Square />
					<Square />
				</div>
			</div>
		);
	}
}

export default Board;
