import React, { Component } from 'react';
import Calendar from '../../lib';

const CustomEvent = props => {
  const onClick = event => {
    event.stopPropagation();
    console.log(props.event.name);
  };

  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={onClick}
    >
      {props.event.name}
    </li>
  );
};

const CustomCell = props => {
  // you can have custom data in each cell, like events for example
  const list = props.customProps.map(event => {
    if (
      event.date.getDate() === props.date.getDate() &&
      event.date.getMonth() === props.date.getMonth() &&
      event.date.getFullYear() === props.date.getFullYear()
    ) {
      return <CustomEvent key={event.id} event={event} />;
    }
    return null;
  });
  return (
    <ul
      className="list-group"
      style={{ width: '100%', textAlign: 'center' }}
    >
      {list}
    </ul>
  );
};

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date('10/01/2018'),
      events: [
        { id: 0, name: 'Doctor', date: new Date('10/04/2018') },
        { id: 1, name: 'Shopping', date: new Date('10/10/2018') },
        { id: 2, name: 'Sport', date: new Date('10/10/2018') }
      ]
    };
  }

  onCellSelected = (date) => {
    console.log(date);
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Calendar
          currentMonth={this.state.date}
          onDateSelected={this.onCellSelected}
          cellComponent={CustomCell}
          cellComponentProps={this.state.events}
          cellContainerStyle={{
            minHeight: '80px',
            border: '1px solid #cecece',
            borderTop: '2px solid #4a9ff5',
            cursor: 'pointer',
            margin: '4px',
            overflow: 'hidden',
            padding: '5px'
          }}
          highlightStyle={{ backgroundColor: '#cecece' }}
        />
        <br />
        <div className="alert alert-primary" role="alert">
          The source code can be find{' '}
          <a href="https://github.com/po8rewq/react-simple-calendar/blob/master/src/docs/customCell.js">
            here
					</a>.
				</div>
      </div>
    );
  }
}
