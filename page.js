'use strict';

/*  
    Some global variables for you! 
    Change the colors!
    Change the name!
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fcolors = ["#eeeeee", "#2c493f", "#555555", "#470522", "#2A0547"];

var counts = { "C": Math.floor(Math.random() * fcolors.length),
  "a": Math.floor(Math.random() * fcolors.length),
  "y": Math.floor(Math.random() * fcolors.length),
  "m": Math.floor(Math.random() * fcolors.length),
  "u": Math.floor(Math.random() * fcolors.length),
  "s": Math.floor(Math.random() * fcolors.length),
  "!": Math.floor(Math.random() * fcolors.length) };

var MySpan = function (_React$Component) {
  _inherits(MySpan, _React$Component);

  function MySpan(props) {
    _classCallCheck(this, MySpan);

    var _this = _possibleConstructorReturn(this, (MySpan.__proto__ || Object.getPrototypeOf(MySpan)).call(this, props));

    _this.advance = function (e) {
      e.stopPropagation();
      counts[_this.props.let] + 1 > fcolors.length - 1 ? counts[_this.props.let] = 0 : counts[_this.props.let] += 1;
      _this.setState({
        showColor: fcolors[counts[_this.props.let]]
      });
    };

    _this.state = {
      showColor: fcolors[Math.floor(Math.random() * fcolors.length)]
    };

    _this.advance = _this.advance.bind(_this);
    return _this;
  }

  _createClass(MySpan, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { id: this.props.let,
          className: this.props.let == "!" ? "ex" : "",
          onClick: this.advance,
          style: { color: this.state.showColor } },
        this.props.let
      );
    }
  }]);

  return MySpan;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          id: "page" },
        React.createElement(
          "p",
          { id: "text" },
          React.createElement(MySpan, { "let": "C" }),
          React.createElement(MySpan, { "let": "a" }),
          React.createElement(MySpan, { "let": "y" }),
          React.createElement(MySpan, { "let": "m" }),
          React.createElement(MySpan, { "let": "u" }),
          React.createElement(MySpan, { "let": "s" }),
          React.createElement(MySpan, { "let": "!" })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("App"));