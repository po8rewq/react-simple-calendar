import React, { PureComponent, Fragment } from 'react';
import CalendarLine from './CalendarLine';
import DateUtils from '../utils/DateUtils';
import { func, object, bool, string, any } from 'prop-types';

export default class Calendar extends PureComponent {
  static propTypes = {
    onDateSelected: func,
    currentMonth: object.isRequired,
    cellComponent: func,
    cellComponentProps: any,
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
    showDayNumber: true,
    showMonthName: true,
    // Default style
    className: 'simple-calendar',
    cellContainerStyle: {
      borderTop: '2px solid #4a9ff5',
      cursor: 'pointer',
      margin: '4px'
    },
    highlightStyle: { backgroundColor: '#c2fcf6' },
    todayStyle: { color: 'red' },
    notCurrentMonthStyle: { color: '#cecece' }
  };

  renderTitleCell = (day) => {
    const style = {
      width: '14%',
      textAlign: 'center'
    };
    if (this.props.titleComponent) {
      return (
        <this.props.titleComponent key={day.toString()} dayOfTheWeek={day} />
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
      currentMonth,
      className,
      showMonthName,
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
          <div key={weekNumber} className="calendar-line" style={style}>
            {list}
          </div>
        );
      }
      return React.createElement(
        CalendarLine,
        Object.assign({}, this.props, {
          key: weekNumber,
          weekNumber: weekNumber - 1
        })
      );
    });

    return (
      <>
        {showMonthName && (
          <h1>{`${DateUtils.getMonthName(currentMonth.getMonth())} ${currentMonth.getFullYear()}`}</h1>
        )}
        <div className={className}>{list}</div>
      </>
    );
  }
}
