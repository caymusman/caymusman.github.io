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

var fcolors = ["black", "#2c493f", "#450874"];

var counts = { "C": Math.floor(Math.random() * fcolors.length),
  "a": Math.floor(Math.random() * fcolors.length),
  "y": Math.floor(Math.random() * fcolors.length),
  "m": Math.floor(Math.random() * fcolors.length),
  "u": Math.floor(Math.random() * fcolors.length),
  "s": Math.floor(Math.random() * fcolors.length),
  "!": Math.floor(Math.random() * fcolors.length) };

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      dropdownVis: false,
      arrowVis: "hide",
      helpTimeout: null
    };

    _this.handleDropdown = _this.handleDropdown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleDropdown",
    value: function handleDropdown() {
      if (this.state.helpTimeout) {
        clearTimeout(this.state.helpTimeout);
        this.setState({
          helpTimeout: null
        });
      }
      this.setState({
        dropdownVis: true,
        arrowVis: "hide"
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var _this2 = this;

      this.setState({
        dropdownVis: false,
        helpTimeout: setTimeout(function () {
          _this2.setState({ arrowVis: "show" });
        }, 15000)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState({
        helpTimeout: setTimeout(function () {
          _this3.setState({ arrowVis: "show" });
        }, 30000)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          id: "page" },
        React.createElement(
          "a",
          { id: "menuAnchor", onMouseOver: this.handleDropdown, onMouseLeave: this.handleClose },
          React.createElement("img", { id: "menuImg", src: "/images/android-chrome-512x512.png" }),
          React.createElement(Dropdown, { visClass: this.state.dropdownVis })
        ),
        React.createElement(
          "p",
          { id: "clickHere", className: this.state.arrowVis },
          " ",
          React.createElement(
            "span",
            { id: "arrow" },
            "\u2190"
          ),
          " Enjoying the page? Hover here for more!"
        ),
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

var MySpan = function (_React$Component2) {
  _inherits(MySpan, _React$Component2);

  function MySpan(props) {
    _classCallCheck(this, MySpan);

    var _this4 = _possibleConstructorReturn(this, (MySpan.__proto__ || Object.getPrototypeOf(MySpan)).call(this, props));

    _this4.advance = function (e) {
      e.stopPropagation();
      counts[_this4.props.let] + 1 > fcolors.length - 1 ? counts[_this4.props.let] = 0 : counts[_this4.props.let] += 1;
      _this4.setState({
        showColor: fcolors[counts[_this4.props.let]]
      });
    };

    _this4.state = {
      showColor: fcolors[Math.floor(Math.random() * fcolors.length)]
    };

    _this4.advance = _this4.advance.bind(_this4);
    return _this4;
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

var Dropdown = function (_React$Component3) {
  _inherits(Dropdown, _React$Component3);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "dropdownDiv", className: this.props.visClass ? "show" : "hide" },
        React.createElement(
          "a",
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "../public/about.html", id: "about" },
          "About"
        ),
        React.createElement(
          "a",
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "../public/portfolio.html", id: "portfolio" },
          "Portfolio"
        ),
        React.createElement(
          "a",
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "../public/contact.html", id: "contact" },
          "Contact"
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("App"));