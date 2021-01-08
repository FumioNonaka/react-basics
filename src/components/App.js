import { createContext, useState } from 'react';
import Board from './Board';
import GameInfo from './GameInfo';
import './App.css';

const initialContext = { squares: Array(9).fill(null) };
export const GameContext = createContext(initialContext);
function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [finished, setFinished] = useState(false);
	const [winner, setWinner] = useState(initialContext.winner);
	const handleClick = (i) => {
		const _squares = [...squares];
		if (_squares[i]) { return; }
		if (finished) { return; }
		_squares[i] = xIsNext ? 'X' : 'O';
		setSquares(_squares);
		setXIsNext(!xIsNext);
		const _winner = calculateWinner(_squares);
		setWinner(_winner);
		if (_winner) {
			setFinished(true);
		}
	};
	return (
		<GameContext.Provider value={{xIsNext, squares, winner, onClick: handleClick}}>
			<div className="game">
				<Board
					squares={squares}
					onClick={(i) => handleClick(i)}
				/>
				<GameInfo />
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
