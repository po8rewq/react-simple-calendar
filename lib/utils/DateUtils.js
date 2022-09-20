"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {
    _classCallCheck(this, DateUtils);
  }

  _createClass(DateUtils, null, [{
    key: "isSameMonth",
    value: function isSameMonth(week, day, defaultDate, firstDayIsMonday) {
      var date = DateUtils.getDay(week, day, defaultDate, firstDayIsMonday);
      return date.getMonth() === defaultDate.getMonth();
    }
  }]);

  return DateUtils;
}();

exports["default"] = DateUtils;

_defineProperty(DateUtils, "getDayName", function (value) {
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
});

_defineProperty(DateUtils, "getMonthName", function (value) {
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
});

_defineProperty(DateUtils, "getFirstDayOfTheMonth", function (defaultDate) {
  return new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 1);
});

_defineProperty(DateUtils, "getLastDayOfPreviousMonth", function (defaultDate) {
  return new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 0);
});

_defineProperty(DateUtils, "getDay", function (p_week, p_day, defaultDate, firstDayIsMonday) {
  var firstD = DateUtils.getFirstDayOfTheMonth(defaultDate).getDay();
  var day = p_day + 1;
  var week = firstD <= 0 ? p_week - 1 : p_week;
  return new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 7 * week + day - firstD + (firstDayIsMonday ? 1 : 0));
});

_defineProperty(DateUtils, "getDayNumber", function (week, day, defaultDate, firstDayIsMonday) {
  return DateUtils.getDay(week, day, defaultDate, firstDayIsMonday).getDate();
});

_defineProperty(DateUtils, "isToday", function (week, day, defaultDate, firstDayIsMonday) {
  var targetDate = DateUtils.getDay(week, day, defaultDate, firstDayIsMonday);
  var now = new Date(Date.now());
  return targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear();
});