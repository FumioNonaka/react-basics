import Square from './Square';

const Board = () => {
	const renderSquare = (i) =>
		<Square
			id={i}
			key={i}
		/>;
	const renderRow = (start) =>
		<div className="board-row">
			{Array.from(Array(3), (_, index) => (
				renderSquare(start + index)
			))}
		</div>;
	return (
		<div>
			{renderRow(0)}
			{renderRow(3)}
			{renderRow(6)}
		</div>
	);
};

export default Board;
