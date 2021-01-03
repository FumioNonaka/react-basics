import React from 'react';
import Board from './Board';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			finished: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(i) {
		const squares = [...this.state.squares];
		if (squares[i]) { return; }
		if (this.state.finished) { return; }
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
		const winner = calculateWinner(squares);
		if (winner) {
			this.setState({finished: true});
		}
	};
	render() {
		const winner = calculateWinner(this.state.squares);
		const status = (winner) ?
			`Winner: ${winner}` :
			`Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		return (
			<div className="game">
				<Board
					squares={this.state.squares}
					onClick={(i) => this.handleClick(i)}
				/>
				<div className="game-info">
					<div>{status}</div>
				</div>
			</div>
		);
	};
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const length = lines.length;
	for (let i = 0; i < length; i++) {
		const [a, b, c] = lines[i];
		const player = squares[a];
		if (player && player === squares[b] && player === squares[c]) {
			return player;
		}
	}
	return null;
}

export default App;
