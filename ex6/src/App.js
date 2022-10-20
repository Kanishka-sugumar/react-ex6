import React from 'react';
import './App.css';

class Counter extends React.Component {

	render() {
		return(
			<div>
        <br/><br/><br/>
        <center><Button text = "React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.">
           </Button></center>
			</div>
		)
	}
}

class Button extends React.Component{
	state = {
		textflag: false,
	}
	
	ToggleButton() {
		this.setState(
			{textflag : !this.state.textflag}
		);
	}

	render() {
		return(
			<div>
				<button onClick={() => this.ToggleButton()}>
				{ this.state.textflag === false ? "Hide":"Show" }
				</button>
				{!this.state.textflag && this.props.text}
			</div>
		)
	}
}

export default Counter;
