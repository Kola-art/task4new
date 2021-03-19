import React from 'react';
import './App.css';
import { Enteredtext } from './components/inputtext';

const DivBlock = (props) =>{
  return (
    <div className="DivBlocks">
    </div>
  )
}


function Visibility(props) {
  const isShown = props.isShown;
  if (isShown) {
    return (<DivBlock />);
  }
  return false;
}

function HideDiv(props) {
  return (
    <button onClick={props.onClick}>
      Hide
    </button>
  );
}

function ShowDiv(props) {
  return (
    <button onClick={props.onClick}>
      Show
    </button>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {isShown: false
       }
    
  }

  handleShow(){
    this.setState({isShown: true});
  }
   
  handleHide(){
    this.setState({isShown: false});
  }

  render(){
    const isShown = this.state.isShown;
    let button;
    let date = new Date();
    date = date.toLocaleTimeString();
    if (isShown) {
      button = <HideDiv onClick={this.handleHide} />;
      console.log(date);
    } else {
      button = <ShowDiv onClick={this.handleShow} />;
      console.log(date);
    }
    return (
      <div>
       <div className="App">
        <Enteredtext />
       </div>
          <div className="App">
            <Visibility isShown={isShown}/>
            {button}
          </div>
      </div>
      );
  }
}


export default App;
