import { createContext, useState } from 'react';

const initialContext = {
	squares: Array(9).fill(null),
	xIsNext: true,
	finished: false,
	winner: null,
};
export const GameContext = createContext(initialContext);
export const GameProvider = ({ children }) => {
	const [squares, setSquares] = useState(initialContext.squares);
	const [xIsNext, setXIsNext] = useState(initialContext.xIsNext);
	const [finished, setFinished] = useState(initialContext.finished);
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
		<GameContext.Provider value={{ onClick: handleClick, squares, winner, xIsNext }}>
			{children}
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
