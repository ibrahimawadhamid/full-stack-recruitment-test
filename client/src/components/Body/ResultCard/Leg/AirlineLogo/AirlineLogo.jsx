import React, {Component} from 'react';
import {BpkGridColumn} from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';

class AirlineLogo extends Component {
  render() {
    return (
      <BpkGridColumn width={2}>
        <BpkImage altText="airline logo" height={48} width={48} style={{width: 48}} src="./EZ.png"/>
      </BpkGridColumn>
    );
  };
}

export default AirlineLogo;
