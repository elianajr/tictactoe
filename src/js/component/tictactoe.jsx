import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");

	return (
		<div
			className="smallSquare"
			onClick={() => {
				if (!value) {
					setValue(props.value);
					props.changeTurn();
				}
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	changeTurn: PropTypes.func
};

export default Square;
