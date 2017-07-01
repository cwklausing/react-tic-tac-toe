import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';
import registerServiceWorker from './registerServiceWorker';

class Game extends React.Component {
	render() {
		return <Board />;
	}
}

ReactDOM.render(<Game />, document.getElementById('root'));

registerServiceWorker();
