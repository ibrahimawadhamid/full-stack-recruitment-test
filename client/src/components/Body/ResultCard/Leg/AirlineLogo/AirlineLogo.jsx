import React, {Component} from 'react';
import {BpkGridColumn} from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';

class AirlineLogo extends Component {
  render() {
    return (
      <BpkGridColumn width={2}>
        <BpkImage altText="airline logo" width={256} height={256} src="./EZ.png"/>
      </BpkGridColumn>
    );
  };
};

export default AirlineLogo;
