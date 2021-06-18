'use strict';

class Menu extends React.Component{
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
      }, 30000)
    })
  }

  componentDidMount(){
    this.setState({
      helpTimeout: setTimeout(() => {
        this.setState({arrowVis: "show"})
      }, 15000)
    })
  }
  
  render(){
    return(
      <div id="menuDiv">
        <a id="menuAnchor" onMouseOver={this.handleDropdown} onMouseLeave={this.handleClose}>
            <img id="menuImg" src="/images/android-chrome-512x512.png"></img>
            <Dropdown visClass={this.state.dropdownVis}/>
          </a>
          <p id="clickHere" className={this.state.arrowVis}> <span id="arrow">←</span></p>
      </div>
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
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="#hey" id="about">About</a>
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="../portfolio" id="portfolio">Portfolio</a>
        <a className={this.props.visClass ? "show + dropdownOption" : "hide + dropdownOption"} href="../contact" id="contact">Contact</a>
      </div>
    )
  }
}

ReactDOM.render(<Menu/>, document.getElementById("landing"));