import React from 'react';
import { shallow } from 'enzyme';
import CalendarCell from '../CalendarCell';
import sinon from 'sinon';

describe('CalendarCell', () => {
	it('should call the callback when clicked', () => {
		const spy = sinon.spy();
		const date = new Date('10/01/2018');
		const wrapper = shallow(
			<CalendarCell
				onDateSelected={spy}
				weekNumber={0}
				dayOfTheWeek={1}
				currentMonth={date}
			/>
		); // dayOfTheWeek={1} because the first day of the month is a tuesday
		wrapper
			.find('div')
			.first()
			.simulate('click', { preventDefault: () => null });
		expect(spy.calledOnce).toBe(true);
		expect(spy.firstCall.args[0]).toMatchObject({ date: date });
	});

	it('should change the state when the mouse is over the cell', () => {
		const wrapper = shallow(
			<CalendarCell
				onDateSelected={date => {}}
				weekNumber={0}
				dayOfTheWeek={0}
				currentMonth={new Date('10/01/2018')}
			/>
		);
		expect(wrapper.state().mouseOver).toBe(false);
		wrapper
			.find('div')
			.first()
			.simulate('mouseOver');
		expect(wrapper.state().mouseOver).toBe(true);
		wrapper
			.find('div')
			.first()
			.simulate('mouseOut');
		expect(wrapper.state().mouseOver).toBe(false);
	});
});
