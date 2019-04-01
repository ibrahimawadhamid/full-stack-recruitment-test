import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import {BpkGridContainer} from 'bpk-component-grid';
import STYLES from './ResultCard.scss';
import Leg from './Leg';
import PriceInfo from "./PriceInfo";

const classes = className => STYLES[className] || 'UNKNOWN';

class ResultCard extends Component {
  render() {
    return (
      <BpkCard className={classes('bottomMargin')}>
        <BpkGridContainer>
          <Leg itineraryId={this.props.itinerary["Id"]} legInfo={this.props.itinerary["OutboundLeg"]}/>
          <Leg itineraryId={this.props.itinerary["Id"]} legInfo={this.props.itinerary["InboundLeg"]}/>
          <PriceInfo itineraryId={this.props.itinerary["Id"]} priceInfo={this.props.itinerary["pricingOptions"]}/>
        </BpkGridContainer>
      </BpkCard>
    );
  };
}

export default ResultCard;
