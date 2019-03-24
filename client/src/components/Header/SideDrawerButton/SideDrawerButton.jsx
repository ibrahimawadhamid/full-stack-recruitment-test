import React, {Component} from 'react';

import BpkButton from 'bpk-component-button';
import BpkMenuIcon from 'bpk-component-icon/lg/menu';
import {withLargeButtonAlignment} from 'bpk-component-icon';

const AlignedMenuIcon = withLargeButtonAlignment(BpkMenuIcon)

class SideDrawerButton extends Component {
  render() {
    return (
      <BpkButton link>
        <AlignedMenuIcon/>
      </BpkButton>
    );
  }
};

export default SideDrawerButton;
