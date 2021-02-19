import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TempComponent from './components/TempComponent';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello WOrld</h1>
        <TempComponent />
      </div>
    );
  }
}

export default App;
