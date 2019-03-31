import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import {BpkGridContainer, BpkGridRow, BpkGridColumn} from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';
import STYLES from './Leg.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {lineHeightLg, iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkButton from 'bpk-component-button';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class Leg extends Component {
  render() {
    let directFlight = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('greenFill')}>Direct</BpkText>;
    let stopStations = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign')}></BpkText>
    if(this.props.legInfo["stopsStations"].length) {
      directFlight = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('redFill')}>{this.props.legInfo["stopsStations"].length + " stop "}</BpkText>;
      stopStations = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign')}>{this.props.legInfo["stopsStations"].join(", ")}</BpkText>;
    }
    return (
      <BpkGridRow>
        <BpkGridColumn width={2}>
          <BpkImage altText="airline logo" width={256} height={256} src="./EZ.png"/>
        </BpkGridColumn>
        <BpkGridColumn width={2}>
          <BpkGridRow><BpkText textStyle="base">07:00</BpkText></BpkGridRow>
          <BpkGridRow><BpkText textStyle="base" className={classes('grayFill500')}>{this.props.legInfo["OriginStationCode"]}</BpkText></BpkGridRow>
        </BpkGridColumn>
        <BpkGridColumn width={2}>
          <AlignedArrow className={classes('arrowGrayColor')}/>
        </BpkGridColumn>
        <BpkGridColumn width={2}>
          <BpkGridRow><BpkText textStyle="base">08:30</BpkText></BpkGridRow>
          <BpkGridRow><BpkText textStyle="base" className={classes('grayFill500')}>{this.props.legInfo["DestinationStationCode"]}</BpkText></BpkGridRow>
        </BpkGridColumn>
        <BpkGridColumn offset={2} width={2}>
          <BpkGridRow><BpkText textStyle="base" className={classes('rightAlign')}>1h 30</BpkText></BpkGridRow>
          <BpkGridRow>{directFlight}{stopStations}</BpkGridRow>
        </BpkGridColumn>
      </BpkGridRow>

    );
  };
};

export default Leg;
