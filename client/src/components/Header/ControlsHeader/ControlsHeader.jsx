import React, {Component} from 'react';
import BpkButton from 'bpk-component-button';
import {BpkGridColumn, BpkGridContainer, BpkGridRow} from 'bpk-component-grid';
import {withButtonAlignment} from 'bpk-component-icon';
import PriceAlertsIcon from 'bpk-component-icon/sm/price-alerts';
import STYLES from './ControlsHeader.scss';

const AlignedPriceAlertsIcon = withButtonAlignment (PriceAlertsIcon);
const classes = className => STYLES[className] || 'UNKNOWN';

class ControlsHeader extends Component {
  render() {
    return(
      <header className={classes('whiteBackground')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={2}>
            <BpkButton link className={classes('leftAlign')}>Filter</BpkButton>
          </BpkGridColumn>
          <BpkGridColumn width={2}>
            <BpkButton link>Sort</BpkButton>
          </BpkGridColumn>
          <BpkGridColumn offset={4} width={4}>
            <BpkButton link className={classes('rightAlign')}><AlignedPriceAlertsIcon/>Price alerts</BpkButton>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
      </header>
    );
  };
}

export default ControlsHeader;
