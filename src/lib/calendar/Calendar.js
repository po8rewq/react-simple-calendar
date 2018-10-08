import React, { Component, Fragment } from 'react';
import CalendarLine from './CalendarLine';
import DateUtils from '../utils/DateUtils';
import { func, object, bool, string } from 'prop-types';

export default class Calendar extends Component {
	static propTypes = {
		onDateSelected: func,
		currentMonth: object,
		cellComponent: func,
		titleComponent: func,
		firstDayIsMonday: bool,
		className: string,
		showDayNumber: bool,
		showMonthName: bool,
		cellContainerStyle: object,
		highlightStyle: object,
		todayStyle: object,
		notCurrentMonthStyle: object
	};

	static defaultProps = {
		firstDayIsMonday: true,
		currentMonth: new Date(Date.now()),
		className: 'simple-calendar',
		showDayNumber: true,
		showMonthName: true,
		cellContainerStyle: {
			borderTop: '2px solid #4a9ff5',
			cursor: 'pointer',
			margin: '4px'
		},
		highlightStyle: { backgroundColor: '#c2fcf6' },
		todayStyle: { color: 'red' },
		notCurrentMonthStyle: { color: '#cecece' }
	};

	constructor(props) {
		super(props);
		this.renderTitleCell = this.renderTitleCell.bind(this);
	}

	renderTitleCell(day) {
		const style = {
			width: '14%',
			textAlign: 'center'
		};
		if (this.props.titleComponent) {
			return (
				<this.props.titleComponent
					key={day.toString()}
					dayOfTheWeek={day}
				/>
			);
		}
		return (
			<div className="calendar-title" style={style} key={day.toString()}>
				{DateUtils.getDayName(day)}
			</div>
		);
	}

	render() {
		const {
			onDateSelected,
			currentMonth,
			cellComponent,
			className,
			cellContainerStyle,
			showDayNumber,
			showMonthName,
			todayStyle,
			highlightStyle,
			notCurrentMonthStyle,
			firstDayIsMonday
		} = this.props;

		var list = [0, 1, 2, 3, 4, 5, 6].map(weekNumber => {
			// render the first line which is the name of the days
			if (weekNumber == 0) {
				const days = firstDayIsMonday
					? [1, 2, 3, 4, 5, 6, 0]
					: [0, 1, 2, 3, 4, 5, 6];
				const list = days.map(this.renderTitleCell);
				const style = { display: 'flex', width: '100%' };
				return (
					<div
						key={weekNumber}
						className="calendar-line"
						style={style}
					>
						{list}
					</div>
				);
			}

			return (
				<CalendarLine
					key={weekNumber}
					weekNumber={weekNumber - 1}
					onDateSelected={onDateSelected}
					currentMonth={currentMonth}
					cellComponent={cellComponent}
					cellContainerStyle={cellContainerStyle}
					showDayNumber={showDayNumber}
					todayStyle={todayStyle}
					highlightStyle={highlightStyle}
					notCurrentMonthStyle={notCurrentMonthStyle}
					firstDayIsMonday={firstDayIsMonday}
				/>
			);
		});

		return (
			<Fragment>
				{showMonthName && (
					<h1>{DateUtils.getMonthName(currentMonth.getMonth())}</h1>
				)}
				<div className={className}>{list}</div>
			</Fragment>
		);
	}
}
