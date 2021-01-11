import { GameProvider } from './GameContext';
import Board from './Board';
import GameInfo from './GameInfo';
import './App.css';

function App() {
	return (
		<GameProvider>
			<div className="game">
				<Board />
				<GameInfo />
			</div>
		</GameProvider>
	);
}

export default App;
