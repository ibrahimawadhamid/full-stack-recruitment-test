import React, {Component} from 'react';
import BpkCard from 'bpk-component-card';
import {BpkGridContainer, BpkGridRow, BpkGridColumn} from 'bpk-component-grid';
import BpkImage from 'bpk-component-image';
import STYLES from './Station.scss';
import BpkText from "bpk-component-text";
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {withAlignment} from 'bpk-component-icon';
import {lineHeightLg, iconSizeLg, lineHeightXxl} from 'bpk-tokens/tokens/base.es6';
import BpkButton from 'bpk-component-button';
import BpkPopover from 'bpk-component-popover';
import moment from 'moment';

const AlignedArrow = withAlignment(
  LongArrowRightIcon, lineHeightXxl, iconSizeLg
);

const classes = className => STYLES[className] || 'UNKNOWN';

class Station extends Component {

  render() {
    return (
        <BpkGridColumn width={2}>
          <BpkGridRow><BpkText textStyle="base">{this.props.stationTime}</BpkText></BpkGridRow>
          <BpkGridRow><BpkText textStyle="base" className={classes('grayFill500')}>{this.props.stationName}</BpkText></BpkGridRow>
        </BpkGridColumn>
    );
  };
};

export default Station;
