import React, {Component} from 'react';
import STYLES from './App.scss';
import Header from "../Header";
import Body from "../Body";

const c = className => STYLES[className] || 'UNKNOWN';

class App extends Component {
  render() {
    return (
      <div className={c('App')}>
        <Header/>
        <Body/>
      </div>
    );
  };
};

export default App;
