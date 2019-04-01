import React, {Component} from 'react';
import {connect} from 'react-redux';
import withInfiniteScroll, {ArrayDataSource} from 'bpk-component-infinite-scroll';
import {BpkExtraLargeSpinner, SPINNER_TYPES} from 'bpk-component-spinner';
import * as actions from '../../store/actions/index';
import STYLES from './Body.scss';
import ResultCard from "./ResultCard";

const classes = className => STYLES[className] || 'UNKNOWN';

class Body extends Component {

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
    if (this.props.searchResults) {
      loadingAllResultsSpinner = null;
      dataSource = new ArrayDataSource(this.props.searchResults["itineraries"]);
    }
    const InfiniteList = withInfiniteScroll(resultList);
    return (
      <main className={classes('App__main')}>
        {loadingAllResultsSpinner}
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchResults: () => dispatch(actions.fetchResults()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
