import React, {Component} from 'react';
import {BpkGridColumn, BpkGridRow} from 'bpk-component-grid';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import moment from 'moment';
import STYLES from './Leg.scss';
import AirlineLogo from "./AirlineLogo";
import Station from './Station';
import LegStops from './LegStops';
import LegStopsText from './LegStopsText';

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
  };
  closeAdditionalStopsPopover = () => {
    this.setState({
      isAdditionalStopsOpen: false,
    });
  };

  render() {
    return (
      <BpkGridRow>
        <LegStops itineraryId={this.props.itineraryId} legInfo={this.props.legInfo} isAdditionalStopsOpen={this.state.isAdditionalStopsOpen} closeAdditionalStopsPopover={this.closeAdditionalStopsPopover} />
        <AirlineLogo/>
        <Station stationTime={moment(this.props.legInfo["Departure"]).format("HH:MM")} stationName={this.props.legInfo["OriginStationCode"]}/>
        <BpkGridColumn width={2}>
          <AlignedArrow className={classes('arrowGrayColor')}/>
        </BpkGridColumn>
        <Station stationTime={moment(this.props.legInfo["Arrival"]).format("HH:MM")} stationName={this.props.legInfo["DestinationStationCode"]}/>
        <BpkGridColumn offset={2} width={2}>
          <BpkGridRow><BpkText textStyle="base" className={classes('rightAlign')}>{moment.utc(this.props.legInfo["Duration"]*60000).format("H[h] mm")}</BpkText></BpkGridRow>
          <BpkGridRow><LegStopsText itineraryId={this.props.itineraryId} legInfo={this.props.legInfo} openAdditionalStopsPopover={this.openAdditionalStopsPopover} /></BpkGridRow>
        </BpkGridColumn>
      </BpkGridRow>
    );
  };
}

export default Leg;
