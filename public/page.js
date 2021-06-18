'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {
      dropdownVis: false,
      arrowVis: "hide",
      helpTimeout: null
    };

    _this.handleDropdown = _this.handleDropdown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(Menu, [{
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
        }, 30000)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState({
        helpTimeout: setTimeout(function () {
          _this3.setState({ arrowVis: "show" });
        }, 15000)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "menuDiv" },
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
          )
        )
      );
    }
  }]);

  return Menu;
}(React.Component);

var Dropdown = function (_React$Component2) {
  _inherits(Dropdown, _React$Component2);

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
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "#hey", id: "about" },
          "About"
        ),
        React.createElement(
          "a",
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "../portfolio", id: "portfolio" },
          "Portfolio"
        ),
        React.createElement(
          "a",
          { className: this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption", href: "../contact", id: "contact" },
          "Contact"
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

ReactDOM.render(React.createElement(Menu, null), document.getElementById("landing"));