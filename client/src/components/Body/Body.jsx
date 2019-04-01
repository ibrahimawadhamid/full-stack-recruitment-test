import React, {Component} from 'react';
import {connect} from 'react-redux';
import withInfiniteScroll, {ArrayDataSource} from 'bpk-component-infinite-scroll';
import {ALERT_TYPES, BpkBannerAlertDismissable} from 'bpk-component-banner-alert';
import {BpkExtraLargeSpinner, SPINNER_TYPES} from 'bpk-component-spinner';
import * as actions from '../../store/actions/index';
import STYLES from './Body.scss';
import ResultCard from "./ResultCard";

const classes = className => STYLES[className] || 'UNKNOWN';

class Body extends Component {
  setErrorAlertDismissed = () => {
    this.setState({
      showErrorAlert: false,
    });
  };

  constructor() {
    super();
    this.state = {
      showErrorAlert: true,
    };
  }

  componentDidMount() {
    this.props.onFetchResults();
  }

  loadingMoreResultsSpinner = () => (
    <BpkExtraLargeSpinner className={classes('center')} type={SPINNER_TYPES.primary}/>
  );

  render() {
    const resultList = ({elements}) => (
      <div id="list">
        {elements.map((element, index) => (
          <ResultCard key={index} itinerary={element}/>
        ))}
      </div>
    );
    let loadingAllResultsSpinner = <BpkExtraLargeSpinner className={classes('center')} type={SPINNER_TYPES.primary}/>;
    let dataSource = new ArrayDataSource([]);
    if (this.props.searchResults)
      dataSource = new ArrayDataSource(this.props.searchResults["itineraries"]);

    if (this.props.searchResults || this.props.errorMessage)
      loadingAllResultsSpinner = null;

    const InfiniteList = withInfiniteScroll(resultList);
    const errorDisplay = (this.props.errorMessage ? <BpkBannerAlertDismissable onDismiss={this.setErrorAlertDismissed} animateOnEnter
                                                                               show={this.state.showErrorAlert} dismissButtonLabel="Dismiss"
                                                                               message={this.props.errorMessage} type={ALERT_TYPES.ERROR}/> : null);
    return (
      <main className={classes('App__main')}>
        {loadingAllResultsSpinner}
        {errorDisplay}
        <InfiniteList
          dataSource={dataSource}
          renderLoadingComponent={this.loadingMoreResultsSpinner}
        />
      </main>
    );
  };
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchResults: () => dispatch(actions.fetchResults()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
