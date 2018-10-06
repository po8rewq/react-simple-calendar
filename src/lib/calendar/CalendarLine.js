import React, { PureComponent } from 'react';
import CalendarCell from './CalendarCell';
import { func, number, object, bool } from 'prop-types';

export default class CalendarLine extends PureComponent {
	static propTypes = {
		weekNumber: number.isRequired,
		onDateSelected: func,
		currentMonth: object.isRequired,
		cellComponent: func,
		cellContainerStyle: object,
		showDayNumber: bool,
		todayStyle: object,
		highlightStyle: object,
		notCurrentMonthStyle: object
	};

	render() {
		const {
			weekNumber,
			onDateSelected,
			currentMonth,
			cellComponent,
			cellContainerStyle,
			showDayNumber,
			todayStyle,
			highlightStyle,
			notCurrentMonthStyle
		} = this.props;
		var list = [0, 1, 2, 3, 4, 5, 6].map(dayOfTheWeek => {
			return (
				<CalendarCell
					key={dayOfTheWeek}
					weekNumber={weekNumber}
					dayOfTheWeek={dayOfTheWeek}
					onDateSelected={onDateSelected}
					currentMonth={currentMonth}
					cellComponent={cellComponent}
					cellContainerStyle={cellContainerStyle}
					showDayNumber={showDayNumber}
					todayStyle={todayStyle}
					highlightStyle={highlightStyle}
					notCurrentMonthStyle={notCurrentMonthStyle}
				/>
			);
		});
		return (
			<div
				className="calendar-line"
				style={{ display: 'flex', width: '100%' }}
			>
				{list}
			</div>
		);
	}
}
