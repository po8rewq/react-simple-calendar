"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DateUtils = _interopRequireDefault(require("../utils/DateUtils"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarCell = /*#__PURE__*/function (_Component) {
  _inherits(CalendarCell, _Component);

  var _super = _createSuper(CalendarCell);

  function CalendarCell(props) {
    var _this;

    _classCallCheck(this, CalendarCell);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          onDateSelected = _this$props.onDateSelected,
          weekNumber = _this$props.weekNumber,
          dayOfTheWeek = _this$props.dayOfTheWeek,
          currentMonth = _this$props.currentMonth,
          firstDayIsMonday = _this$props.firstDayIsMonday;
      onDateSelected({
        date: _DateUtils["default"].getDay(weekNumber, dayOfTheWeek, currentMonth, firstDayIsMonday)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (_) {
      return _this.setState({
        mouseOver: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function (_) {
      return _this.setState({
        mouseOver: false
      });
    });

    _this.state = {
      mouseOver: false
    };
    return _this;
  }

  _createClass(CalendarCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          weekNumber = _this$props2.weekNumber,
          dayOfTheWeek = _this$props2.dayOfTheWeek,
          currentMonth = _this$props2.currentMonth,
          onDateSelected = _this$props2.onDateSelected,
          cellContainerStyle = _this$props2.cellContainerStyle,
          showDayNumber = _this$props2.showDayNumber,
          todayStyle = _this$props2.todayStyle,
          highlightStyle = _this$props2.highlightStyle,
          notCurrentMonthStyle = _this$props2.notCurrentMonthStyle,
          firstDayIsMonday = _this$props2.firstDayIsMonday,
          cellComponentProps = _this$props2.cellComponentProps;

      var isToday = _DateUtils["default"].isToday(weekNumber, dayOfTheWeek, currentMonth, firstDayIsMonday);

      var containerStyle = _objectSpread({}, cellContainerStyle);

      if (isToday) {
        containerStyle = _objectSpread(_objectSpread({}, containerStyle), todayStyle);
      } else if (!_DateUtils["default"].isSameMonth(weekNumber, dayOfTheWeek, currentMonth, firstDayIsMonday)) {
        containerStyle = _objectSpread(_objectSpread({}, containerStyle), notCurrentMonthStyle);
      }

      if (this.state.mouseOver) {
        containerStyle = _objectSpread(_objectSpread({}, containerStyle), highlightStyle);
      } // the width must be hard-coded, otherwise the calendar won't be correctly displayed


      containerStyle.width = '14%';

      var cellDay = _DateUtils["default"].getDay(weekNumber, dayOfTheWeek, currentMonth, firstDayIsMonday);

      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.onClick,
        onMouseOver: this.onMouseOver,
        onMouseOut: this.onMouseOut,
        style: containerStyle
      }, showDayNumber && /*#__PURE__*/_react["default"].createElement("span", {
        className: "day-number"
      }, _DateUtils["default"].getDayNumber(weekNumber, dayOfTheWeek, currentMonth, firstDayIsMonday)), this.props.cellComponent && /*#__PURE__*/_react["default"].createElement(this.props.cellComponent, {
        customProps: cellComponentProps,
        date: cellDay,
        onDateSelected: onDateSelected,
        mouseOver: this.state.mouseOver
      }));
    }
  }]);

  return CalendarCell;
}(_react.Component);

exports["default"] = CalendarCell;

_defineProperty(CalendarCell, "propTypes", {
  onDateSelected: _propTypes.func.isRequired,
  weekNumber: _propTypes.number.isRequired,
  dayOfTheWeek: _propTypes.number.isRequired,
  currentMonth: _propTypes.object.isRequired,
  cellComponent: _propTypes.func,
  cellComponentProps: _propTypes.any,
  cellContainerStyle: _propTypes.object,
  showDayNumber: _propTypes.bool,
  todayStyle: _propTypes.object,
  highlightStyle: _propTypes.object,
  notCurrentMonthStyle: _propTypes.object,
  firstDayIsMonday: _propTypes.bool
});