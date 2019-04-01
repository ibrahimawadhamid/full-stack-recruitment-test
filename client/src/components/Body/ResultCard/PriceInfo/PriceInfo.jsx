import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BpkTable, BpkTableBody, BpkTableCell, BpkTableHead, BpkTableHeadCell, BpkTableRow,} from 'bpk-component-table';
import {BpkGridColumn, BpkGridRow} from 'bpk-component-grid';
import BpkText from "bpk-component-text";
import BpkButton from 'bpk-component-button';
import BpkPopover from 'bpk-component-popover';
import STYLES from './PriceInfo.scss';

const classes = className => STYLES[className] || 'UNKNOWN';

class PriceInfo extends Component {
  openOtherDealsPopover = () => {
    this.setState({
      isOtherDealsOpen: true,
    });
  };

  closeOtherDealsPopover = () => {
    this.setState({
      isOtherDealsOpen: false,
    });
  };

  constructor() {
    super();
    this.state = {
      isOtherDealsOpen: false,
    };
  }

  render() {
    const otherDeals = this.props.priceInfo.length > 1 ?
      <BpkButton onClick={this.openOtherDealsPopover} id={this.props.itineraryId + "OtherDeals"} link>
        &nbsp; {this.props.priceInfo.length - 1} other
        deals</BpkButton> : null;
    return (
      <BpkGridRow>
        <BpkGridColumn width={8}>
          <BpkGridRow className={classes('relativePosition')}>
            <BpkText textStyle="xl"
                     className={classes('leftAlign')}>{this.props.currencySymbol}{this.props.priceInfo[0]["Price"]}</BpkText>
            <BpkPopover id={this.props.itineraryId + "OtherDeals-popover"}
                        target={() => document.getElementById(this.props.itineraryId + "OtherDeals")}
                        onClose={this.closeOtherDealsPopover}
                        isOpen={this.state.isOtherDealsOpen}
                        label="Other Deals popover"
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
                      <BpkTableRow key={this.props.itineraryId + "offer" + index}>
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
            {otherDeals}
          </BpkGridRow>
        </BpkGridColumn>
        <BpkGridColumn className={classes('relativePosition')} width={4}>
          <BpkButton large className={classes('selectButton')}>Select</BpkButton>
        </BpkGridColumn>
      </BpkGridRow>
    );
  };
}

const mapStateToProps = state => {
  return {
    currencySymbol: state.searchResults["currencySymbol"],
  };
};

export default connect(mapStateToProps, null)(PriceInfo);
