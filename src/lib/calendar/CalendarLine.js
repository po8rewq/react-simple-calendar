import React, { PureComponent } from 'react';
import CalendarCell from './CalendarCell';
import { func, number, object, bool, any } from 'prop-types';

const style = { display: 'flex', width: '100%' };

export default class CalendarLine extends PureComponent {
	static propTypes = {
		weekNumber: number.isRequired,
		onDateSelected: func,
		currentMonth: object.isRequired,
		cellComponent: func,
		cellComponentProps: any,
		cellContainerStyle: object,
		showDayNumber: bool,
		todayStyle: object,
		highlightStyle: object,
		notCurrentMonthStyle: object,
		firstDayIsMonday: bool
	};

	render() {
		// render each day of the week
		var list = [0, 1, 2, 3, 4, 5, 6].map(dayOfTheWeek => {
			return React.createElement(
				CalendarCell,
				Object.assign({}, this.props, {
					key: dayOfTheWeek.toString(),
					dayOfTheWeek: dayOfTheWeek
				})
			);
		});
		return (
			<div className="calendar-line" style={style}>
				{list}
			</div>
		);
	}
}
