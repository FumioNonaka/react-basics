import React from 'react';
import Board from './Board';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(i) {
		const squares = [...this.state.squares];
		squares[i] = 'X';
		this.setState({squares: squares});
	};
	render() {
		return (
			<div className="game">
				<Board
					squares={this.state.squares}
					onClick={(i) => this.handleClick(i)}
				/>
			</div>
		);
	};
}

export default App;
