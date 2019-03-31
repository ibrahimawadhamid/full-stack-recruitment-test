import React, {Component} from 'react';
import BpkButton from 'bpk-component-button';
import STYLES from './ControlsHeader.scss';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

import { withButtonAlignment  } from 'bpk-component-icon';
import PriceAlertsIcon from 'bpk-component-icon/sm/price-alerts';
const AlignedPriceAlertsIcon = withButtonAlignment (PriceAlertsIcon);
const classes = className => STYLES[className] || 'UNKNOWN';

class ControlsHeader extends Component {
  render() {
    return(
      <BpkGridContainer className={classes('whiteBackground')}>
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
    );
  };
};

export default ControlsHeader;
