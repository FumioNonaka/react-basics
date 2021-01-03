import Square from './Square';

const Board = (props) => {
	const renderSquare = (i) =>
		<Square
			value={props.squares[i]}
			key={i}
			onClick={() => props.onClick(i)}
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
