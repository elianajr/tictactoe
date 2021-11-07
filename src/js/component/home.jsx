import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";

import Square from "./tictactoe.jsx";

const LINES = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const Home = () => {
	const [turn, setTurn] = useState("🍕");
	const [board, setBoard] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState();

	const continueGame = position => {
		let auxBoard = [...board];
		auxBoard[position] = turn;
		setBoard(auxBoard);
	};

	useEffect(() => {
		if (board.some(square => square != null)) {
			for (let i = 0; i < LINES.length; i++) {
				const [a, b, c] = LINES[i];
				if (
					board[a] &&
					board[a] === board[b] &&
					board[a] === board[c]
				) {
					setWinner(true);
				}
			}

			const change = currentTurn => {
				console.log(currentTurn, turn);
				currentTurn == "🍕" ? setTurn("🍔") : setTurn("🍕");
			};
			change(turn);
		}
	}, [board]);

	return (
		<div className="table-game">
			<h4>Turn: {turn}</h4>
			
			<Row>
				<Square value={turn} continueGame={continueGame} position={0} />
				<Square value={turn} continueGame={continueGame} position={1} />
				<Square value={turn} continueGame={continueGame} position={2} />
			</Row>

			<Row>
				<Square value={turn} continueGame={continueGame} position={3} />
				<Square value={turn} continueGame={continueGame} position={4} />
				<Square value={turn} continueGame={continueGame} position={5} />
			</Row>

			<Row>
				<Square value={turn} continueGame={continueGame} position={6} />
				<Square value={turn} continueGame={continueGame} position={7} />
				<Square value={turn} continueGame={continueGame} position={8} />
			</Row>

			{winner && (
				<>
					<h3>Congratulations! You get a free 🍺</h3>
					<button
						onClick={() => {
							window.location.reload();
						}}>
						Play Again
					</button>
				</>
			)}
		</div>
	);
};

export default Home;
