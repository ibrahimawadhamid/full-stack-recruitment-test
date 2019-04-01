import React, {Component} from 'react';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import STYLES from './InfoHeader.scss';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);
const classes = className => STYLES[className] || 'UNKNOWN';

class InfoHeader extends Component {
  render() {
    return (
      <header className={classes('InfoHeader')}>
        <div className={classes('white-fill')}>
          <BpkText tagName="h1" textStyle="xxl">
            EDI &nbsp;
            <AlignedArrow className={classes('white-fill')} />
            &nbsp; LHR
          </BpkText>
          <BpkText tagName="p">1 traveller, economy</BpkText>
        </div>
      </header>
    );
  };
}

export default InfoHeader;
