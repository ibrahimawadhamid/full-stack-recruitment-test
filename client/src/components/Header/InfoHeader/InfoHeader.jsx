import React, { Component } from 'react';
import { connect } from 'react-redux';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import { iconSizeLg, lineHeightXxl } from 'bpk-tokens/tokens/base.es6';
import STYLES from './InfoHeader.scss';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);
const classes = className => STYLES[className] || 'UNKNOWN';

export class InfoHeader extends Component {
  render() {
    let travelText = "travellers, economy";
    let sourceText = "EDI";
    let destinationText = "LON";
    if (this.props.searchResults) {
      travelText = this.props.searchResults["query"]["Adults"] +
        (this.props.searchResults["query"]["Adults"] > 1 ? " travellers, " : " traveller, ") +
        this.props.searchResults["query"]["CabinClass"];
      sourceText = this.props.searchResults["itineraries"][0]["OutboundLeg"]["OriginStationCode"];
      destinationText = this.props.searchResults["itineraries"][0]["InboundLeg"]["OriginStationCode"];
    }

    return (
      <header className={classes('InfoHeader')}>
        <div className={classes('white-fill')}>
          <BpkText tagName="h1" textStyle="xxl">
            {sourceText} &nbsp;
            <AlignedArrow className={classes('white-fill')} />
            &nbsp; {destinationText}
          </BpkText>
          <BpkText tagName="p">{travelText}</BpkText>
        </div>
      </header>
    );
  };
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, null)(InfoHeader);
