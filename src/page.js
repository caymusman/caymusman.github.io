'use strict';

/*  
    Some global variables for you! 
    Change the colors!
    Change the name!
*/

let fcolors = ["#eeeeee", "#2c493f", "#555555", "#470522", "#2A0547"];

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
    }
    
    this.advance = this.advance.bind(this);
  }
  
  advance = e => {
    e.stopPropagation();
    counts[this.props.let] + 1 > fcolors.length - 1 ? counts[this.props.let] = 0 : counts[this.props.let] += 1;
    this.setState({
      showColor: fcolors[counts[this.props.let]],
    });
  }

  render(){
    return(
      <span id={this.props.let}
            className={this.props.let == "!" ? "ex" : ""}
            onClick={this.advance}
            style={{color: this.state.showColor}}>
        {this.props.let}</span>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div 
        id="page">
          <p id="text">
            <MySpan let = "C"></MySpan>
            <MySpan let = "a"></MySpan>
            <MySpan let = "y"></MySpan>
            <MySpan let = "m"></MySpan>
            <MySpan let = "u"></MySpan>
            <MySpan let = "s"></MySpan>
            <MySpan let = "!"></MySpan>
          </p>
      </div>
        )
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));