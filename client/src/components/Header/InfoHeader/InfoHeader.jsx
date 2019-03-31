import React, {Component} from 'react';

import STYLES from './InfoHeader.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {lineHeightXxl, iconSizeLg} from 'bpk-tokens/tokens/base.es6';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const c = className => STYLES[className] || 'UNKNOWN';

class InfoHeader extends Component {
  render() {
    return (
      <header className={c('InfoHeader')}>
        <div className={c('white-fill')}>
          <BpkText tagName="h1" textStyle="xxl">
            EDI &nbsp;
            <AlignedArrow className={c('white-fill')}/>
            &nbsp; LON
          </BpkText>
          <BpkText tagName="p">2 travellers, economy</BpkText>
        </div>
      </header>
    );
  };
};

export default InfoHeader;
