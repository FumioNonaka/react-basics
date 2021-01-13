import { useContext } from 'react';
import { GameContext } from './GameContext';

const Square = ({ id }) => {
	const { onClick, history, stepNumber } = useContext(GameContext);
	const squares = [...history[stepNumber].squares];
	return (
		<button
			type="button"
			className="square"
			onClick={() => onClick(id)}
		>
			{squares[id]}
		</button>
	);
};

export default Square;