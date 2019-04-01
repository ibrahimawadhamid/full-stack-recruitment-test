import React, {Component} from 'react';
import {BpkGridColumn, BpkGridRow} from 'bpk-component-grid';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkPopover from 'bpk-component-popover';
import {BpkTable, BpkTableBody, BpkTableCell, BpkTableHead, BpkTableHeadCell, BpkTableRow,} from 'bpk-component-table';
import moment from 'moment';
import STYLES from './Leg.scss';
import AirlineLogo from "./AirlineLogo";
import Station from './Station';

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
    let directFlight = <BpkText textStyle="base" className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('greenFill')}>Direct</BpkText>;
    if(this.props.legInfo["stopsStations"].length) {
      directFlight =
        <BpkText id={this.props.itineraryId + this.props.legInfo["Id"]+"moreStops"} onClick={this.openAdditionalStopsPopover} textStyle="base"
                              className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('redFill')}>
        {this.props.legInfo["stopsStations"].length + (this.props.legInfo["stopsStations"].length == 1 ? " stop " : " stops ")}
        </BpkText>;
    }
    return (
      <BpkGridRow>
        <div id={this.props.itineraryId + this.props.legInfo["Id"]}>
          <BpkPopover id={this.props.itineraryId + this.props.legInfo["Id"] + "more-stops-popover"}
            target={() => document.getElementById(this.props.itineraryId + this.props.legInfo["Id"]+"moreStops")}
            onClose={this.closeAdditionalStopsPopover}
            isOpen={this.state.isAdditionalStopsOpen}
            label="More Stops popover"
            closeButtonText="Close"
            renderTarget={() =>
              document.getElementById(this.props.itineraryId + this.props.legInfo["Id"])
            }
            closeButtonProps={{
              tabIndex: 0,
            }}>
            <BpkTable>
              <BpkTableHead>
                <BpkTableRow>
                  <BpkTableHeadCell>From</BpkTableHeadCell>
                  <BpkTableHeadCell>To</BpkTableHeadCell>
                  <BpkTableHeadCell>Duration</BpkTableHeadCell>
                </BpkTableRow>
              </BpkTableHead>
              <BpkTableBody>
            {this.props.legInfo["Segments"].map(segment => {
              return (
                <BpkTableRow key={segment["Id"]}>
                  <BpkTableCell>{segment["OriginCode"] + " " + moment(segment["DepartureDateTime"]).format("HH:MM")}</BpkTableCell>
                  <BpkTableCell>{segment["DestinationCode"] + " " + moment(segment["ArrivalDateTime"]).format("HH:MM")}</BpkTableCell>
                  <BpkTableCell>{moment.utc(segment["Duration"]*60000).format("H[h] mm")}</BpkTableCell>
                </BpkTableRow>
              )
            })}
              </BpkTableBody>
            </BpkTable>
          </BpkPopover>
        </div>
        <AirlineLogo/>
        <Station stationTime={moment(this.props.legInfo["Departure"]).format("HH:MM")} stationName={this.props.legInfo["OriginStationCode"]}/>
        <BpkGridColumn width={2}>
          <AlignedArrow className={classes('arrowGrayColor')}/>
        </BpkGridColumn>
        <Station stationTime={moment(this.props.legInfo["Arrival"]).format("HH:MM")} stationName={this.props.legInfo["DestinationStationCode"]}/>
        <BpkGridColumn offset={2} width={2}>
          <BpkGridRow><BpkText textStyle="base" className={classes('rightAlign')}>{moment.utc(this.props.legInfo["Duration"]*60000).format("H[h] mm")}</BpkText></BpkGridRow>
          <BpkGridRow>{directFlight}</BpkGridRow>
        </BpkGridColumn>
      </BpkGridRow>

    );
  };
}

export default Leg;
