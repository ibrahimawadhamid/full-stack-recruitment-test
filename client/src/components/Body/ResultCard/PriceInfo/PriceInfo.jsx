import React, {Component} from 'react';
import {BpkGridColumn, BpkGridRow} from 'bpk-component-grid';
import STYLES from './PriceInfo.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkButton from 'bpk-component-button';
import BpkPopover from 'bpk-component-popover';
import {BpkTable, BpkTableBody, BpkTableCell, BpkTableHead, BpkTableHeadCell, BpkTableRow,} from 'bpk-component-table';
import connect from "react-redux/es/connect/connect";

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class PriceInfo extends Component {
  openOtherDealsPopover = () => {
    this.setState({
      isOtherDealsOpen: true,
    });
  }
  closeOtherDealsPopover = () => {
    this.setState({
      isOtherDealsOpen: false,
    });
  }

  constructor() {
    super();
    this.state = {
      isOtherDealsOpen: false,
    };
  }

  render() {
    const otherDeals = this.props.priceInfo.length > 1 ?
      <BpkButton onClick={this.openOtherDealsPopover} id={this.props.itenraryId + "OtherDeals"} link
                 className={classes('bottomAlign')}>&nbsp; {this.props.priceInfo.length - 1} other
        deals</BpkButton> : null
    return (
      <BpkGridRow>
        <BpkGridColumn width={8}>
          <BpkGridRow className={classes('relativePosition')}>
            <BpkText textStyle="xl"
                     className={classes('leftAlign')}>{this.props.currencySymbol}{this.props.priceInfo[0]["Price"]}</BpkText>
            {otherDeals}
            <BpkPopover id={this.props.itenraryId + "OtherDeals-popover"}
                        target={() => document.getElementById(this.props.itenraryId + "OtherDeals")}
                        onClose={this.closeOtherDealsPopover}
                        isOpen={this.state.isOtherDealsOpen}
                        label="My popover"
                        closeButtonText="Close"
            >
              <BpkTable>
                <BpkTableHead>
                  <BpkTableRow>
                    <BpkTableHeadCell>Agent</BpkTableHeadCell>
                    <BpkTableHeadCell>Price ({this.props.currencySymbol})</BpkTableHeadCell>
                  </BpkTableRow>
                </BpkTableHead>
                <BpkTableBody>
                  {this.props.priceInfo.slice(1).map((offer, index) => {
                    return (
                      <BpkTableRow key={this.props.itenraryId + "offer" + index}>
                        <BpkTableCell>{offer["Agent"]}</BpkTableCell>
                        <BpkTableCell>{offer["Price"]}</BpkTableCell>
                      </BpkTableRow>
                    )
                  })}
                </BpkTableBody>
              </BpkTable>
            </BpkPopover>
          </BpkGridRow>
          <BpkGridRow>
            <BpkText textStyle="base"
                     className={classes('leftAlign') + ' ' + classes('grayFill300')}>{this.props.priceInfo[0]["Agent"]}</BpkText>
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
