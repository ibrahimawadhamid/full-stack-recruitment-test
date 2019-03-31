import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';
import STYLES from './ResultCard.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {lineHeightLg, iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkButton from 'bpk-component-button';
import Leg from './Leg';
import PriceInfo from "./PriceInfo";

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class ResultCard extends Component {
  render() {
    return (
      <BpkCard className={classes('bottomMargin')}>
        <BpkGridContainer>
          <Leg legInfo={this.props.itenrary["OutboundLeg"]}/>
          <Leg legInfo={this.props.itenrary["InboundLeg"]}/>
          <PriceInfo priceInfo={this.props.itenrary["pricingOptions"]}/>
        </BpkGridContainer>
      </BpkCard>
    );
  };
};

export default ResultCard;
