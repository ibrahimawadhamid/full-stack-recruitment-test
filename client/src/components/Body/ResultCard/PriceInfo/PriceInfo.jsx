import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import {BpkGridContainer, BpkGridRow, BpkGridColumn} from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';
import STYLES from './PriceInfo.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {lineHeightLg, iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkButton from 'bpk-component-button';
import * as actions from "../../../../store/actions";
import connect from "react-redux/es/connect/connect";

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class PriceInfo extends Component {
  render() {
    const otherDeals = this.props.priceInfo.length > 0 ? <BpkText textStyle="xs"> other deals</BpkText> : null
    return (
      <BpkGridRow>
        <BpkGridColumn width={8}>
          <BpkGridRow>
            <BpkText textStyle="xl" className={classes('leftAlign')}>{this.props.currencySymbol}{this.props.priceInfo[0]["Price"]}</BpkText>
            {otherDeals}
          </BpkGridRow>
          <BpkGridRow>
            <BpkText textStyle="base" className={classes('leftAlign')+' '+classes('grayFill300')}>{this.props.priceInfo[0]["Agent"]}</BpkText>
          </BpkGridRow>
        </BpkGridColumn>
        <BpkGridColumn width={4}>
          <BpkButton large className={classes('rightAlign')}>Select</BpkButton>
        </BpkGridColumn>
      </BpkGridRow>
    );
  };
};


const mapStateToProps = state => {
  return {
    currencySymbol: state.searchResults["currencySymbol"],
  };
}

export default connect(mapStateToProps, null)(PriceInfo);
