# React simple calendar

## How to use it

This component is still WIP, so not on NPM yet.
In order to use it, in your project:

```cmd
npm install --save https://github.com/po8rewq/react-simple-calendar.git
```

A demo is [available here](https://po8rewq.github.io/react-simple-calendar/) and the [source code](src/docs/index.js).

## Available properties

| Property             | Type     | Description                                                                  |
| -------------------- | -------- | ---------------------------------------------------------------------------- |
| className            | `string` | if you need to add a class to the `Calendar` component - default: `calendar` |
| currentMonth         | `object` | The date of the displayed month - `Date.now()` by default                    |
| cellComponent        | `func`   | A child component to be displayed in the `CalendarCell`                      |
| cellComponentProps   | `any`    | `cellComponent` custom props                                                 |
| titleComponent       | `func`   | If you want to have a custom title instead of the default one                |
| onDateSelected       | `func`   | The callback called when a date is selected                                  |
| showDayNumber        | `bool`   | true if you want to day to be displayed in the cell container                |
| showMonthName        | `bool`   | true if you want a basic title with the name of the current month            |
| cellContainerStyle   | `object` | Style for the cell container (parent of `cellComponent`)                     |
| highlightStyle       | `object` | Style for when mouse over a cell                                             |
| todayStyle           | `object` | Style for today's cell                                                       |
| notCurrentMonthStyle | `object` | Style for days outside of `currentMonth`                                     |
| firstDayIsMonday     | `bool`   | default to `true`                                                            |

## Notes

There are multiple way to send data to the `custom cell`. If you're using Redux, you can use `mapStateToProps`, otherwise you can specify a value for `cellComponentProps`, and this will be send to the `CustomCell` as a `customProps` prop.

Based on [react-npm-component-starter](https://github.com/markusenglund/react-npm-component-starter).
