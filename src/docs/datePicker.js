import React, { Component, Fragment } from 'react';
import Calendar from '../../lib';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date('07/05/2018')
    };
  }

  getMonthName = (d) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  prevMonth = (event) => {
    event.preventDefault();
    const currentDate = this.state.date;
    let newDate;
    if (currentDate.getMonth() == 0) {
      newDate = new Date(currentDate.getFullYear() - 1, 11, 1);
    } else {
      newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      );
    }
    this.setState({ date: newDate });
  }

  nextMonth = (event) => {
    event.preventDefault();
    const currentDate = this.state.date;
    let newDate;
    if (currentDate.getMonth() == 11) {
      newDate = new Date(currentDate.getFullYear() + 1, 0, 1);
    } else {
      newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      );
    }
    this.setState({ date: newDate });
  }

  render() {
    var date = this.state.date;
    return (
      <>
        <div
          className="container"
          style={{
            marginTop: '20px',
            padding: '10px',
            width: '300px',
            border: '1px solid #cecece'
          }}
        >
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.prevMonth}
              >
                {'<'}
              </button>
            </div>
            <div
              className="col-6"
              style={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              {this.getMonthName(date)}
            </div>
            <div className="col-3" style={{ textAlign: 'right' }}>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.nextMonth}
              >
                {'>'}
              </button>
            </div>
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
            firstDayIsMonday={true}
            style={{ width: '100%' }}
          />
        </div>
        <br />
        <div className="alert alert-primary" role="alert">
          The source code can be find{' '}
          <a href="https://github.com/po8rewq/react-simple-calendar/blob/master/src/docs/datePicker.js">
            here
					</a>
          .
				</div>
      </>
    );
  }
}

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
