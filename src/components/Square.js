import { useContext } from 'react';
import { GameContext } from './GameContext';

const Square = ({ id }) => {
	const { onClick, finished, history, stepNumber } = useContext(GameContext);
	const squares = [...history[stepNumber].squares];
	return (
		<button
			type="button"
			className="square"
			onClick={finished ? null : () => onClick(id)}
		>
			{squares[id]}
		</button>
	);
};

export default Square;
