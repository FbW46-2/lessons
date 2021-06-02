import React from "react";
import ReactDOM from "react-dom";

// add the green inside this function
const Alert = () => {
	return (
		<div className={`alert ${props.color==="red"?"alert-danger":props.color==="green"? "alert-success": "alert-warning"}`} role="alert">
			{props.text}
		</div>
	);
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.getElementById("root")
);
