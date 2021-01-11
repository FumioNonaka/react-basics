import { useContext } from 'react';
import { GameContext } from './GameContext';

const Square = ({ id }) => {
	const { onClick, squares } = useContext(GameContext);
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
