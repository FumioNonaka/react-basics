import { useContext } from 'react';
import { GameContext } from './App';

const GameInfo = () => {
	const { winner, xIsNext } = useContext(GameContext);
	const status = (winner) ?
		`Winner: ${winner}` :
		`Next player: ${xIsNext ? 'X' : 'O'}`;
	return (
		<div className="game-info">
			<div>{status}</div>
		</div>
	);
};

export default GameInfo;
