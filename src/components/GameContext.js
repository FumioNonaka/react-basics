import { createContext, useState } from 'react';

const initialContext = {
	history: [
		{squares: Array(9).fill(null)},
	],
	xIsNext: true,
	finished: false,
	winner: null,
	stepNumber: 0,
};
export const GameContext = createContext(initialContext);
export const GameProvider = ({ children }) => {
	const [history, setHistory] = useState(initialContext.history);
	const [xIsNext, setXIsNext] = useState(initialContext.xIsNext);
	const [finished, setFinished] = useState(initialContext.finished);
	const [winner, setWinner] = useState(initialContext.winner);
	const [stepNumber, setStepNumber] = useState(initialContext.stepNumber);
	const handleClick = (i) => {
		const _history = history.slice(0, stepNumber + 1);
		const _squares = [..._history[_history.length - 1].squares];
		if (_squares[i]) { return; }
		_squares[i] = xIsNext ? 'X' : 'O';
		setHistory([..._history, { squares: _squares }]);
		setXIsNext(!xIsNext);
		setStepNumber(_history.length);
		const _winner = calculateWinner(_squares);
		setWinner(_winner);
		if (_winner) {
			setFinished(true);
		} else if (_history.length >= 9) {
			setFinished(true);
		}
	};
	const jumpTo = (step) => {
		const winner = calculateWinner([...history[step].squares]);
		setWinner(winner);
		setStepNumber(step);
		setXIsNext((step % 2) === 0);
		setFinished(false);
	};
	return (
		<GameContext.Provider
			value={{
				onClick: handleClick,
				finished,
				jumpTo,
				calculateWinner,
				history,
				stepNumber,
				winner,
				xIsNext,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

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
