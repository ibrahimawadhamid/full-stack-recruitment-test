import React, {Component} from 'react';
import {BpkGridColumn, BpkGridRow} from 'bpk-component-grid';
import BpkText from "bpk-component-text";
import STYLES from './Station.scss';

const classes = className => STYLES[className] || 'UNKNOWN';

class Station extends Component {
  render() {
    return (
        <BpkGridColumn width={2}>
          <BpkGridRow><BpkText textStyle="base">{this.props.stationTime}</BpkText></BpkGridRow>
          <BpkGridRow><BpkText textStyle="base" className={classes('grayFill500')}>{this.props.stationName}</BpkText></BpkGridRow>
        </BpkGridColumn>
    );
  };
}

export default Station;
