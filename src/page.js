'use strict';

/*  
    Some global variables for you! 
    Change the colors!
    Change the name!
*/

let bcolors = ["#9CC0E7", "#F7DBD7", "#eeeeee", "#FAEACB", "#9de0bf"];

let fcolors = ["#eeeeee", "#FAEACB", "#F7DBD7", "#9CC0E7", "#555555"];

let counts = {"C": Math.floor(Math.random() * fcolors.length),
             "a": Math.floor(Math.random() * fcolors.length),
             "y": Math.floor(Math.random() * fcolors.length),
             "m": Math.floor(Math.random() * fcolors.length),
             "u": Math.floor(Math.random() * fcolors.length),
             "s": Math.floor(Math.random() * fcolors.length),
             "!": Math.floor(Math.random() * fcolors.length)};



class MySpan extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      showColor: fcolors[Math.floor(Math.random() * fcolors.length)],
      classes: ""
    }
    
    this.advance = this.advance.bind(this);
    this.handleMouse=this.handleMouse.bind(this);
    this.show=this.show.bind(this);
  }
  
  advance = e => {
    e.stopPropagation();
    counts[this.props.let] + 1 > fcolors.length - 1 ? counts[this.props.let] = 0 : counts[this.props.let] += 1;
    this.setState({
      showColor: fcolors[counts[this.props.let]],
      classes: "clicked"
    });
    setTimeout(() => {this.setState({classes: ""});}, 300);
  }

  handleMouse(){
    let sound = document.getElementById(this.props.let + "audio");
    sound.volume = .5;
    sound.currentTime = 0;
    let promise = sound.play();

    if (promise !== undefined) {
      promise.then(_ => {
      this.show(false);
      // Autoplay started!
    }).catch(error => {
      // Autoplay not allowed!
      this.show(true);
    });
  }
  }

  show(val){
    this.props.show(val);
  }
  
  render(){
    let ex = "";
    this.props.let == "!" ? ex = " ex": ex = "";
    return(
      <span id={this.props.let}
            onClick={this.advance}
            onMouseOver={this.handleMouse}
            style={{color: this.state.showColor}}
            className = {this.state.classes + ex}>
            <audio 
              className = "clip"
              id={this.props.let + "audio"} 
              src={this.props.sound} 
              autostart="false">
          Your browser does not support the <code>Audio</code> tag</audio>
        {this.props.let}</span>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      bcolor: bcolors[Math.floor(Math.random() * bcolors.length)],
      show: false
    }
    
    this.handleColor=this.handleColor.bind(this);
    this.show=this.show.bind(this);
  }
  
  handleColor(childVal){
    let bindex = bcolors.indexOf(this.state.bcolor);
    if(bindex == bcolors.length - 1){
      this.setState({bcolor: bcolors[0]});
    }else{
      this.setState({bcolor: bcolors[bindex+1]});
    }
  }

  show(val){
    this.setState({
      show: val
    });
    console.log(this.state.show);
  }
  
  
  render(){
    return(
      <div 
        id="page"
        onClick={this.handleColor}
        style={{backgroundColor: this.state.bcolor}}>
          <p id="text">
            <MySpan 
              id="C"
              let = "C"
              sound = "sounds/C.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="a"
              let = "a"
              sound = "sounds/a.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="y"
              let = "y"
              sound = "sounds/y.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="m"
              let = "m"
              sound = "sounds/m.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="u"
              let = "u"
              sound = "sounds/u.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="s"
              let = "s"
              sound = "sounds/s.mp3"
              show={this.show}
              ></MySpan>
            <MySpan 
              id="!"
              let = "!"
              sound = "sounds/ex.mp3"
              show={this.show}
              ></MySpan>
          </p>
          <br></br>
          <p 
            id="psst"
            className = {this.state.show ? "show" : "hide"}
            >
              (psst. Make sure your autoplay is turned on for the full experience)
          </p>
      </div>
        )
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));