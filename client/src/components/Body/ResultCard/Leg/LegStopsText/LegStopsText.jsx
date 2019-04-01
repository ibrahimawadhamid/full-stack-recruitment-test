import React, {Component} from 'react';
import BpkText from "bpk-component-text";
import STYLES from './LegStopsText.scss';

const classes = className => STYLES[className] || 'UNKNOWN';

class LegStopsText extends Component {
  render() {
    let directFlight = <BpkText textStyle="base"
                                className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('greenFill')}>Direct</BpkText>;
    if (this.props.legInfo["stopsStations"].length) {
      directFlight =
        <BpkText id={this.props.itineraryId + this.props.legInfo["Id"] + "moreStops"}
                 onClick={this.props.openAdditionalStopsPopover} textStyle="base"
                 className={classes('rightAlign') + ' ' + classes('bottomAlign') + ' ' + classes('redFill')}>
          {this.props.legInfo["stopsStations"].length + (this.props.legInfo["stopsStations"].length == 1 ? " stop " : " stops ")}
        </BpkText>;
    }
    return (
      <div>
        {directFlight}
      </div>
    );
  };
}

export default LegStopsText;
