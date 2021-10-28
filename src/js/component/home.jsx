import React, { useState } from "react";
import Square from "./tictactoe.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
	const [turn, setTurn] = useState("");

	const changeTurn = () => {
		if (turn == "X") {
			setTurn("O");
		} else {
			setTurn("X");
		}
	};

	const squareContainer = [];

	for (let index = 0; index < 9; index++) {
		squareContainer.push(
			<Square
				key={index.toString()}
				value={turn}
				changeTurn={changeTurn}
			/>
		);
	}

	return (
		<Container>
			<Row>
				{squareContainer[0]}
				{squareContainer[3]}
				{squareContainer[6]}
			</Row>
			<Row>
				{squareContainer[1]}
				{squareContainer[4]}
				{squareContainer[7]}
			</Row>
			<Row>
				{squareContainer[2]}
				{squareContainer[5]}
				{squareContainer[8]}
			</Row>
		</Container>
	);

	// return (
	// 	<Container>
	// 		<Row>
	// 			<Square key="1" value={turn} changeTurn={changeTurn} />
	// 			<Square key="2" value={turn} changeTurn={changeTurn} />
	// 			<Square key="3" value={turn} changeTurn={changeTurn} />
	// 		</Row>
	// 		<Row>
	// 			<Square key="4" value={turn} changeTurn={changeTurn} />
	// 			<Square key="5" value={turn} changeTurn={changeTurn} />
	// 			<Square key="6" value={turn} changeTurn={changeTurn} />
	// 		</Row>
	// 		<Row>
	// 			<Square key="7" value={turn} changeTurn={changeTurn} />
	// 			<Square key="8" value={turn} changeTurn={changeTurn} />
	// 			<Square key="9" value={turn} changeTurn={changeTurn} />
	// 		</Row>
	// 	</Container>
	// );
};

export default Home;
