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

	static getDay = (week, day, defaultDate) => {
		const firstD = DateUtils.getFirstDayOfTheMonth(defaultDate).getDay();

		if (week == 0) {
			// if it's outside of the current month, we display the previous days
			if (firstD > day + 1) {
				// last day of the previous month
				const previousMonth = DateUtils.getLastDayOfPreviousMonth(
					defaultDate
				);
				return new Date(
					previousMonth.getFullYear(),
					previousMonth.getMonth(),
					previousMonth.getDate() - previousMonth.getDay() + day + 1
				);
			}
		}

		return new Date(
			defaultDate.getFullYear(),
			defaultDate.getMonth(),
			7 * week + day + 1 - (firstD == 0 ? 1 : firstD - 1)
		);
	};

	static getDayNumber = (week, day, defaultDate) => {
		return DateUtils.getDay(week, day, defaultDate).getDate();
	};

	static isToday = (week, day, defaultDate) => {
		const targetDate = DateUtils.getDay(week, day, defaultDate);
		const now = new Date(Date.now());
		return (
			targetDate.getDate() === now.getDate() &&
			targetDate.getMonth() === now.getMonth() &&
			targetDate.getFullYear() === now.getFullYear()
		);
	};

	static isSameMonth(week, day, defaultDate) {
		const date = DateUtils.getDay(week, day, defaultDate);
		return date.getMonth() === defaultDate.getMonth();
	}
}
