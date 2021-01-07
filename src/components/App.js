import { createContext, useState } from 'react';
import Board from './Board';
import './App.css';

const initialContext = { squares: Array(9).fill(null) };
export const GameContext = createContext(initialContext);
function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [finished, setFinished] = useState(false);
	const handleClick = (i) => {
		const _squares = [...squares];
		if (_squares[i]) { return; }
		if (finished) { return; }
		_squares[i] = xIsNext ? 'X' : 'O';
		setSquares(_squares);
		setXIsNext(!xIsNext);
		const winner = calculateWinner(_squares);
		if (winner) {
			setFinished(true);
		}
	};
	const winner = calculateWinner(squares);
	const status = (winner) ?
		`Winner: ${winner}` :
		`Next player: ${xIsNext ? 'X' : 'O'}`;
	return (
		<GameContext.Provider value={{squares, onClick: handleClick}}>
			<div className="game">
				<Board
					squares={squares}
					onClick={(i) => handleClick(i)}
				/>
				<div className="game-info">
					<div>{status}</div>
				</div>
			</div>
		</GameContext.Provider>
	);
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
