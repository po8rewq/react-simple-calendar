export default class DateUtils {
	static getDayName = value => {
		switch (value) {
			case 0:
				return 'Sunday';
			case 1:
				return 'Monday';
			case 2:
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
			default:
				return 'N/A';
		}
	};

	static getMonthName = value => {
		switch (value) {
			case 0:
				return 'January';
			case 1:
				return 'February';
			case 2:
				return 'March';
			case 3:
				return 'April';
			case 4:
				return 'May';
			case 5:
				return 'June';
			case 6:
				return 'July';
			case 7:
				return 'August';
			case 8:
				return 'September';
			case 9:
				return 'October';
			case 10:
				return 'November';
			case 11:
				return 'December';
			default:
				return 'N/A';
		}
	};

	static getFirstDayOfTheMonth = defaultDate => {
		return new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 1);
	};

	static getLastDayOfPreviousMonth = defaultDate => {
		return new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 0);
	};

	static getDay = (p_week, p_day, defaultDate, firstDayIsMonday) => {
		const firstD = DateUtils.getFirstDayOfTheMonth(defaultDate).getDay();
		const day = p_day + 1;
		const week = firstD <= 0 ? p_week - 1 : p_week;
		return new Date(
			defaultDate.getFullYear(),
			defaultDate.getMonth(),
			7 * week + day - firstD + (firstDayIsMonday ? 1 : 0)
		);
	};

	static getDayNumber = (week, day, defaultDate, firstDayIsMonday) => {
		return DateUtils.getDay(
			week,
			day,
			defaultDate,
			firstDayIsMonday
		).getDate();
	};

	static isToday = (week, day, defaultDate, firstDayIsMonday) => {
		const targetDate = DateUtils.getDay(
			week,
			day,
			defaultDate,
			firstDayIsMonday
		);
		const now = new Date(Date.now());
		return (
			targetDate.getDate() === now.getDate() &&
			targetDate.getMonth() === now.getMonth() &&
			targetDate.getFullYear() === now.getFullYear()
		);
	};

	static isSameMonth(week, day, defaultDate, firstDayIsMonday) {
		const date = DateUtils.getDay(week, day, defaultDate, firstDayIsMonday);
		return date.getMonth() === defaultDate.getMonth();
	}
}
