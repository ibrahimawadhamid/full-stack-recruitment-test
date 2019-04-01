import React, {Component} from 'react';
import BpkPopover from 'bpk-component-popover';
import {BpkTable, BpkTableBody, BpkTableCell, BpkTableHead, BpkTableHeadCell, BpkTableRow,} from 'bpk-component-table';
import moment from 'moment';

class LegStops extends Component {
  render() {
    return (
        <div id={this.props.itineraryId + this.props.legInfo["Id"]}>
          <BpkPopover id={this.props.itineraryId + this.props.legInfo["Id"] + "more-stops-popover"}
            target={() => document.getElementById(this.props.itineraryId + this.props.legInfo["Id"]+"moreStops")}
            onClose={this.props.closeAdditionalStopsPopover}
            isOpen={this.props.isAdditionalStopsOpen}
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
    );
  };
}

export default LegStops;
