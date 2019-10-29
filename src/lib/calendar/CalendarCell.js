import React, { Component } from 'react';
import DateUtils from '../utils/DateUtils';
import { func, number, object, bool, any } from 'prop-types';

export default class CalendarCell extends Component {
  static propTypes = {
    onDateSelected: func.isRequired,
    weekNumber: number.isRequired,
    dayOfTheWeek: number.isRequired,
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



  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  onClick = (event) => {
    event.preventDefault();
    const {
      onDateSelected,
      weekNumber,
      dayOfTheWeek,
      currentMonth,
      firstDayIsMonday
    } = this.props;

    onDateSelected({
      date: DateUtils.getDay(
        weekNumber,
        dayOfTheWeek,
        currentMonth,
        firstDayIsMonday
      )
    });
  }

  onMouseOver = (_) => this.setState({ mouseOver: true })

  onMouseOut = (_) => this.setState({ mouseOver: false })

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
      notCurrentMonthStyle,
      firstDayIsMonday,
      cellComponentProps
    } = this.props;

    const isToday = DateUtils.isToday(
      weekNumber,
      dayOfTheWeek,
      currentMonth,
      firstDayIsMonday
    );

    let containerStyle = { ...cellContainerStyle };

    if (isToday) {
      containerStyle = { ...containerStyle, ...todayStyle };
    } else if (
      !DateUtils.isSameMonth(
        weekNumber,
        dayOfTheWeek,
        currentMonth,
        firstDayIsMonday
      )
    ) {
      containerStyle = { ...containerStyle, ...notCurrentMonthStyle };
    }

    if (this.state.mouseOver) {
      containerStyle = { ...containerStyle, ...highlightStyle };
    }

    // the width must be hard-coded, otherwise the calendar won't be correctly displayed
    containerStyle.width = '14%';

    const cellDay = DateUtils.getDay(
      weekNumber,
      dayOfTheWeek,
      currentMonth,
      firstDayIsMonday
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
              currentMonth,
              firstDayIsMonday
            )}
          </span>
        )}
        {this.props.cellComponent && (
          <this.props.cellComponent
            customProps={cellComponentProps}
            date={cellDay}
            onDateSelected={onDateSelected}
            mouseOver={this.state.mouseOver}
          />
        )}
      </div>
    );
  }
}
