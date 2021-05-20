'use strict';

/*  
    Some global variables for you! 
    Change the colors!
    Change the name!
*/

let fcolors = ["black", "#2c493f", "#450874"];

let counts = {"C": Math.floor(Math.random() * fcolors.length),
             "a": Math.floor(Math.random() * fcolors.length),
             "y": Math.floor(Math.random() * fcolors.length),
             "m": Math.floor(Math.random() * fcolors.length),
             "u": Math.floor(Math.random() * fcolors.length),
             "s": Math.floor(Math.random() * fcolors.length),
             "!": Math.floor(Math.random() * fcolors.length)};


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      dropdownVis: false,
      arrowVis: "hide",
      helpTimeout: null
    }

    this.handleDropdown=this.handleDropdown.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  handleDropdown(){
    if(this.state.helpTimeout){
      clearTimeout(this.state.helpTimeout)
      this.setState({
        helpTimeout: null
      })
    }
    this.setState({
      dropdownVis: true,
      arrowVis: "hide",
    })
  }

  handleClose(){
    this.setState({
      dropdownVis: false,
      helpTimeout: setTimeout(() => {
        this.setState({arrowVis: "show"})
      }, 15000)
    })
  }

  componentDidMount(){
    this.setState({
      helpTimeout: setTimeout(() => {
        this.setState({arrowVis: "show"})
      }, 30000)
    })
  }
  
  render(){
    return(
      <div 
        id="page">
        <a id="menuAnchor" onMouseOver={this.handleDropdown} onMouseLeave={this.handleClose}>
          <img id="menuImg" src="/images/android-chrome-512x512.png"></img>
          <Dropdown visClass={this.state.dropdownVis}/>
        </a>
        <p id="clickHere" className={this.state.arrowVis}> <span id="arrow">←</span> Enjoying the page? Hover here for more!</p>
        
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

class Dropdown extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return( 
      <div id="dropdownDiv" className={this.props.visClass ? "show" : "hide"}>
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="../about/" id="about">About</a>
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="../portfolio/" id="portfolio">Portfolio</a>
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="../contact/" id="contact">Contact</a>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));