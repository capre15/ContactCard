import logo from './logo.svg';
import './App.css';
import Contact from "./componenet/contact"
import { Component } from 'react';

class App extends Component {
  render (){
    return(
      <div>
    <Contact name="jay"
      mobileNumber="1234"
      email="jay@gmail.com"
      workPhone="2468"
      />
      <Contact name="jacky"
      mobileNumber="12345"
      email="jacky@gmail.com"
      workPhone="246810"
      />
      <Contact name="jackie"
      mobileNumber="123456"
      email="jackie@gmail.com"
      workPhone="246811"
      />
      </div>
    )
  
  }
  
  
}

export default App;
