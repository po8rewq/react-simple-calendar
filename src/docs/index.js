import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomCell from './customCell';
import DatePicker from './datePicker';
import './styles.css';

class Demos extends Component {
	state = {
		demo: 0
	};

	constructor(props) {
		super(props);
		this.onClickNavLink = this.onClickNavLink.bind(this);
		this.renderNavItem = this.renderNavItem.bind(this);
	}

	renderDemo(value) {
		switch (value) {
			case 0:
				return <CustomCell />;
			case 1:
				return <DatePicker />;
			default:
				return null;
		}
	}

	onClickNavLink(event) {
		event.preventDefault();
		const newDemo = parseInt(event.currentTarget.getAttribute('demo'));
		if (this.state.demo != newDemo) this.setState({ demo: newDemo });
	}

	renderNavItem(item) {
		return (
			<li className="nav-item" key={item.id.toString()}>
				<a
					className={`nav-link ${
						this.state.demo == item.id ? 'active' : ''
					}`}
					href="#"
					demo={item.id}
					onClick={this.onClickNavLink}
				>
					{item.name}
				</a>
			</li>
		);
	}

	render() {
		const list = [
			{ name: 'With custom cell', id: 0 },
			{ name: 'Date picker', id: 1 }
		];

		return (
			<div className="container">
				<nav className="navbar navbar-light bg-light">
					<a className="navbar-brand" href="#">
						React-simple-calendar demos
					</a>
				</nav>
				<br />
				<div className="alert alert-primary" role="alert">
					More info on the{' '}
					<a href="https://github.com/po8rewq/react-simple-calendar">
						Github page
					</a>
				</div>
				<br />
				<ul className="nav nav-tabs">{list.map(this.renderNavItem)}</ul>
				{this.renderDemo(this.state.demo)}
			</div>
		);
	}
}

render(<Demos />, document.getElementById('app'));
