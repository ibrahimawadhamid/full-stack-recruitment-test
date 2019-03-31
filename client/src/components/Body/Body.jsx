import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import STYLES from './Body.scss';
import ResultCard from "./ResultCard";
import withInfiniteScroll, {
  ArrayDataSource,
} from 'bpk-component-infinite-scroll';

const classes = className => STYLES[className] || 'UNKNOWN';

class Body extends Component {

  componentDidMount() {
    this.props.onFetchResults();
  }

  render() {
    const SomeList = ({ elements }) => (
      <div id="list">
        {elements.map((element, index) => (
          <ResultCard key={index} itenrary={element} />
        ))}
      </div>
    );

    let dataSource = new ArrayDataSource([]);
    if (this.props.searchResults)
      dataSource = new ArrayDataSource(this.props.searchResults["itineraries"]);
    const InfiniteList = withInfiniteScroll(SomeList);
    return (
      <main className={classes('App__main')}>
        <InfiniteList dataSource={dataSource} />
      </main>
    );
  };
};


const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchResults: () => dispatch(actions.fetchResults()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
