import React, { Component } from 'react';
import DateUtils from '../utils/DateUtils';
import { func, number, object, bool } from 'prop-types';

export default class CalendarCell extends Component {
	static propTypes = {
		onDateSelected: func.isRequired,
		weekNumber: number.isRequired,
		dayOfTheWeek: number.isRequired,
		currentMonth: object.isRequired,
		cellComponent: func,
		cellContainerStyle: object,
		showDayNumber: bool,
		todayStyle: object,
		highlightStyle: object,
		notCurrentMonthStyle: object
	};

	state = {
		mouseOver: false
	};

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}

	onClick(event) {
		event.preventDefault();
		const {
			onDateSelected,
			weekNumber,
			dayOfTheWeek,
			currentMonth
		} = this.props;

		onDateSelected({
			date: DateUtils.getDay(weekNumber, dayOfTheWeek, currentMonth)
		});
	}

	onMouseOver(_) {
		this.setState({ mouseOver: true });
	}

	onMouseOut(_) {
		this.setState({ mouseOver: false });
	}

	render() {
		const {
			weekNumber,
			dayOfTheWeek,
			currentMonth,
			onDateSelected,
			cellContainerStyle,
			showDayNumber,
			todayStyle,
			highlightStyle,
			notCurrentMonthStyle
		} = this.props;

		const isToday = DateUtils.isToday(
			weekNumber,
			dayOfTheWeek,
			currentMonth
		);

		let containerStyle = { ...cellContainerStyle };

		if (isToday) {
			containerStyle = { ...containerStyle, ...todayStyle };
		} else if (
			!DateUtils.isSameMonth(weekNumber, dayOfTheWeek, currentMonth)
		) {
			containerStyle = { ...containerStyle, ...notCurrentMonthStyle };
		}

		if (this.state.mouseOver) {
			containerStyle = { ...containerStyle, ...highlightStyle };
		}

		// the width must be hardcoded, otherwise the calendar won't be correclty displayed
		containerStyle.width = '14%';

		const cellDay = DateUtils.getDay(
			weekNumber,
			dayOfTheWeek,
			currentMonth
		);
		return (
			<div
				onClick={this.onClick}
				onMouseOver={this.onMouseOver}
				onMouseOut={this.onMouseOut}
				style={containerStyle}
			>
				{showDayNumber && (
					<span className="day-number">
						{DateUtils.getDayNumber(
							weekNumber,
							dayOfTheWeek,
							currentMonth
						)}
					</span>
				)}
				{this.props.cellComponent && (
					<this.props.cellComponent
						date={cellDay}
						onDateSelected={onDateSelected}
						mouseOver={this.state.mouseOver}
					/>
				)}
			</div>
		);
	}
}
