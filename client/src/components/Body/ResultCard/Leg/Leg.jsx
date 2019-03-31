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
import BpkPopover from 'bpk-component-popover';
import moment from 'moment';
import Station from './Station';
import AirlineLogo from "./AirlineLogo";

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class Leg extends Component {
  constructor() {
    super();
    this.state = {
      isAdditionalStopsOpen: false,
    };
  }
  openAdditionalStopsPopover = () => {
    this.setState({
      isAdditionalStopsOpen: true,
    });
  }
  closeAdditionalStopsPopover = () => {
    this.setState({
      isAdditionalStopsOpen: false,
    });
  }

  render() {
    let directFlight = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('greenFill')}>Direct</BpkText>;
    let stopStations = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign')}></BpkText>
    if(this.props.legInfo["stopsStations"].length) {
      directFlight =
        <BpkText id={this.props.legInfo["Id"]+"moreStops"} onClick={this.openAdditionalStopsPopover} textStyle="base"
                              className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('redFill')}>
        {this.props.legInfo["stopsStations"].length + (this.props.legInfo["stopsStations"].length == 1 ? " stop " : " stops ")}
        </BpkText>;
    }
    return (
      <BpkGridRow>
        <div id={this.props.legInfo["Id"]}>
          <BpkPopover id="my-popover"
            target={() => document.getElementById(this.props.legInfo["Id"]+"moreStops")}
            onClose={this.closeAdditionalStopsPopover}
            isOpen={this.state.isAdditionalStopsOpen}
            label="My popover"
            closeButtonText="Close"
            renderTarget={() =>
              document.getElementById(this.props.legInfo["Id"])
            }
            closeButtonProps={{
              tabIndex: 0,
            }}>
            {this.props.legInfo["Segments"].map(segment => {
              return (
                <BpkText key={segment["Id"]}>{
                  moment(segment["DepartureDateTime"]).format("HH:MM") + " " +
                  segment["OriginCode"] + " -> " + segment["DestinationCode"] + " " + moment(segment["ArrivalDateTime"]).format("HH:MM") +
                  " (" + moment.utc(segment["Duration"]*60000).format("h[h] mm[)]")}<br/>
                </BpkText>)
            })}
          </BpkPopover>
        </div>
        <AirlineLogo/>
        <Station stationTime={moment(this.props.legInfo["Departure"]).format("HH:MM")} stationName={this.props.legInfo["OriginStationCode"]}/>
        <BpkGridColumn width={2}>
          <AlignedArrow className={classes('arrowGrayColor')}/>
        </BpkGridColumn>
        <Station stationTime={moment(this.props.legInfo["Arrival"]).format("HH:MM")} stationName={this.props.legInfo["DestinationStationCode"]}/>
        <BpkGridColumn offset={2} width={2}>
          <BpkGridRow><BpkText textStyle="base" className={classes('rightAlign')}>{moment.utc(this.props.legInfo["Duration"]*60000).format("h[h] mm")}</BpkText></BpkGridRow>
          <BpkGridRow>{directFlight}</BpkGridRow>
        </BpkGridColumn>
      </BpkGridRow>

    );
  };
};

export default Leg;
