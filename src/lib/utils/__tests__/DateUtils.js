import DateUtils from '../DateUtils';

describe('getFirstDayOfTheMonth', () => {
	it('should return the first day of the month', () => {
		const value = DateUtils.getFirstDayOfTheMonth(new Date('09/05/2018'));
		expect(value.toDateString()).toBe(
			new Date('09/01/2018').toDateString()
		);
	});
});

describe('getLastDayOfPreviousMonth', () => {
	it('should return the last day of the previous month', () => {
		const value = DateUtils.getLastDayOfPreviousMonth(
			new Date('09/05/2018')
		);
		expect(value.toDateString()).toBe(
			new Date('08/31/2018').toDateString()
		);
	});
});

describe('getDay', () => {
	it('should return the right value based on the week and day', () => {
		const defaultDate = new Date('09/03/2018');
		const value = DateUtils.getDay(1, 2, defaultDate);
		expect(value.toDateString()).toBe(
			new Date('09/05/2018').toDateString()
		);
	});
});

describe('isToday', () => {
	it('should always work for today', () => {
		const now = new Date(Date.now());
		const week = Math.ceil(now.getDate()/7) - 1;
		const day = now.getDay() - 1;
		expect(DateUtils.isToday(week, day, now)).toBe(true);
	});

	it('should return false for an old date', () => {
		expect(DateUtils.isToday(1, 5, new Date('08/12/1998'))).toBe(false);
	});
});

describe('getDayNumber', () => {
	it('should return the right day value', () => {
		expect(DateUtils.getDayNumber(2, 2, new Date('09/12/2018'))).toBe(12);
	});
});

describe('isSameMonth', () => {
	it('should return false for date from previous month', () => {
		expect(DateUtils.isSameMonth(0, 1, new Date('09/12/2018'))).toBe(false);
	});

	it('should return true for date in current month', () => {
		expect(DateUtils.isSameMonth(2, 1, new Date('09/12/2018'))).toBe(true);
	});
});
