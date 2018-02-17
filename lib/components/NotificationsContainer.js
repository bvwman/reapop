'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsContainer = exports.NotificationsContainer = function (_Component) {
  _inherits(NotificationsContainer, _Component);

  function NotificationsContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationsContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationsContainer.__proto__ || Object.getPrototypeOf(NotificationsContainer)).call.apply(_ref, [this].concat(args))), _this), _this._renderNotifications = function () {
      var position = _this.props.position;
      var className = _this.props.theme.notification.className;
      var _this$props$theme$not = _this.props.theme.notificationsContainer.transition,
          name = _this$props$theme$not.name,
          enterTimeout = _this$props$theme$not.enterTimeout,
          leaveTimeout = _this$props$theme$not.leaveTimeout;
      var notifications = _this.props.notifications;

      // when notifications are displayed at the bottom,
      // we display notifications from bottom to top

      if (position.startsWith('b')) {
        notifications = notifications.reverse();
      }

      return notifications.map(function (notification) {
        return _react2.default.createElement(
          _CSSTransition2.default,
          {
            key: notification.id,
            classNames: {
              enter: name.enter,
              exit: name.leave
            },
            timeout: {
              enter: enterTimeout,
              exit: leaveTimeout
            }
          },
          _react2.default.createElement(_Notification2.default, {
            key: notification.id,
            notification: notification,
            className: className
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Render notifications
   * @private
   * @returns {XML}
   */


  _createClass(NotificationsContainer, [{
    key: 'render',


    /**
     * Render
     * @returns {XML}
     */
    value: function render() {
      var className = this.props.theme.notificationsContainer.className;
      var position = this.props.position;


      return _react2.default.createElement(
        'div',
        { className: className.main + ' ' + className.position(position) },
        _react2.default.createElement(
          _TransitionGroup2.default,
          null,
          this._renderNotifications()
        )
      );
    }
  }]);

  return NotificationsContainer;
}(_react.Component);

NotificationsContainer.propTypes = {
  notifications: _propTypes2.default.array.isRequired,
  position: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape({
    notificationsContainer: _propTypes2.default.shape({
      className: _propTypes2.default.shape({
        main: _propTypes2.default.string.isRequired,
        position: _propTypes2.default.func.isRequired
      }).isRequired,
      transition: _propTypes2.default.shape({
        name: _propTypes2.default.object.isRequired,
        enterTimeout: _propTypes2.default.number.isRequired,
        leaveTimeout: _propTypes2.default.number.isRequired
      }).isRequired
    }).isRequired,
    notification: _propTypes2.default.shape({
      className: _propTypes2.default.object.isRequired
    }).isRequired
  }).isRequired
};
NotificationsContainer.defaultProps = {
  notifications: []
};
exports.default = NotificationsContainer;