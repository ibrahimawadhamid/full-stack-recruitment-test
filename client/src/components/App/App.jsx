import React, {Component} from 'react';
import STYLES from './App.scss';
import Header from "../Header";
import Body from "../Body";

const classes = className => STYLES[className] || 'UNKNOWN';

class App extends Component {
  render() {
    return (
      <div className={classes('App')}>
        <Header/>
        <Body/>
      </div>
    );
  };
}

export default App;
