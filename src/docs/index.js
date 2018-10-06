import React from 'react';
import { render } from 'react-dom';
import Calendar from '../../lib';
import './styles.css';

const CustomCell = props => {
	// you can have custom data in each cell, like events for example
	return <div>{props.date.toLocaleDateString()}</div>;
};

const CustomTitleCell = props => {
	const style = { width: '14%', textAlign: 'center', marginBottom: '15px' };
	let day = '';
	switch (props.dayOfTheWeek) {
		case 0:
			day = 'Sun';
			break;
		case 1:
			day = 'Mon';
			break;
		case 2:
			day = 'Tue';
			break;
		case 3:
			day = 'Wed';
			break;
		case 4:
			day = 'Thu';
			break;
		case 5:
			day = 'Fri';
			break;
		case 6:
			day = 'Sat';
			break;
	}
	return <div style={style}>{day}</div>;
};

function Demo() {
	return (
		<div>
			<h1>Component with custom cell</h1>
			<Calendar
				currentMonth={new Date(Date.now())}
				onDateSelected={date => console.log(date)}
				cellComponent={CustomCell}
				showDayNumber={false}
				cellContainerStyle={{
					height: '80px',
					borderTop: '2px solid #4a9ff5',
					cursor: 'pointer',
					margin: '4px',
					textAlign: 'center'
				}}
			/>
		</div>
	);
}

function Demo1() {
	var date = new Date('08/05/2018');
	return (
		<div>
			<h1>Basic component</h1>
			<div className="customCalendarTitle">
				{/* you could add buttons to navigate between months */}
				<h1>August</h1>
			</div>
			<Calendar
				className="minimal-calendar"
				currentMonth={date}
				onDateSelected={date => console.log(date)}
				cellContainerStyle={{
					textAlign: 'center',
					cursor: 'pointer'
				}}
				showMonthName={false}
				titleComponent={CustomTitleCell}
			/>
		</div>
	);
}

function Demos() {
	return (
		<div>
			<Demo />
			<Demo1 />
		</div>
	);
}

render(<Demos />, document.getElementById('app'));
