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

var bcolors = ["#9CC0E7", "#F7DBD7", "#eeeeee", "#FAEACB", "#9de0bf"];

var fcolors = ["#eeeeee", "#FAEACB", "#F7DBD7", "#9CC0E7", "#555555"];

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
        showColor: fcolors[counts[_this.props.let]],
        classes: "clicked"
      });
      setTimeout(function () {
        _this.setState({ classes: "" });
      }, 300);
    };

    _this.state = {
      showColor: fcolors[Math.floor(Math.random() * fcolors.length)],
      classes: ""
    };

    _this.advance = _this.advance.bind(_this);
    _this.handleMouse = _this.handleMouse.bind(_this);
    _this.show = _this.show.bind(_this);
    return _this;
  }

  _createClass(MySpan, [{
    key: "handleMouse",
    value: function handleMouse() {
      var _this2 = this;

      var sound = document.getElementById(this.props.let + "audio");
      sound.volume = .5;
      sound.currentTime = 0;
      var promise = sound.play();

      if (promise !== undefined) {
        promise.then(function (_) {
          _this2.show(false);
          // Autoplay started!
        }).catch(function (error) {
          // Autoplay not allowed!
          _this2.show(true);
        });
      }
    }
  }, {
    key: "show",
    value: function show(val) {
      this.props.show(val);
    }
  }, {
    key: "render",
    value: function render() {
      var ex = "";
      this.props.let == "!" ? ex = " ex" : ex = "";
      return React.createElement(
        "span",
        { id: this.props.let,
          onClick: this.advance,
          onMouseOver: this.handleMouse,
          style: { color: this.state.showColor },
          className: this.state.classes + ex },
        React.createElement(
          "audio",
          {
            className: "clip",
            id: this.props.let + "audio",
            src: this.props.sound,
            autostart: "false" },
          "Your browser does not support the ",
          React.createElement(
            "code",
            null,
            "Audio"
          ),
          " tag"
        ),
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

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      bcolor: bcolors[Math.floor(Math.random() * bcolors.length)],
      show: false
    };

    _this3.handleColor = _this3.handleColor.bind(_this3);
    _this3.show = _this3.show.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: "handleColor",
    value: function handleColor(childVal) {
      var bindex = bcolors.indexOf(this.state.bcolor);
      if (bindex == bcolors.length - 1) {
        this.setState({ bcolor: bcolors[0] });
      } else {
        this.setState({ bcolor: bcolors[bindex + 1] });
      }
    }
  }, {
    key: "show",
    value: function show(val) {
      this.setState({
        show: val
      });
      console.log(this.state.show);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          id: "page",
          onClick: this.handleColor,
          style: { backgroundColor: this.state.bcolor } },
        React.createElement(
          "p",
          { id: "text" },
          React.createElement(MySpan, {
            id: "C",
            "let": "C",
            sound: "sounds/C.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "a",
            "let": "a",
            sound: "sounds/a.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "y",
            "let": "y",
            sound: "sounds/y.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "m",
            "let": "m",
            sound: "sounds/m.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "u",
            "let": "u",
            sound: "sounds/u.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "s",
            "let": "s",
            sound: "sounds/s.mp3",
            show: this.show
          }),
          React.createElement(MySpan, {
            id: "!",
            "let": "!",
            sound: "sounds/ex.mp3",
            show: this.show
          })
        ),
        React.createElement("br", null),
        React.createElement(
          "p",
          {
            id: "psst",
            className: this.state.show ? "show" : "hide"
          },
          "(psst. Make sure your autoplay is turned on for the full experience)"
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("App"));