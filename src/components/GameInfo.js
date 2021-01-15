import { useContext, useMemo } from 'react';
import { GameContext } from './GameContext';

const GameInfo = () => {
	const { jumpTo, history, winner, xIsNext } = useContext(GameContext);
	const status = useMemo(() => (winner) ?
		`Winner: ${winner}` :
		`Next player: ${xIsNext ? 'X' : 'O'}`
	, [winner, xIsNext]);
	const moves = useMemo(() => history.map((step, move) => {
		const desc = move ?
			'Go to move #' + move :
			'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	}), [history, jumpTo]);
	return (
		<div className="game-info">
			<div>{status}</div>
			<ol>{moves}</ol>
		</div>
	);
};

export default GameInfo;
