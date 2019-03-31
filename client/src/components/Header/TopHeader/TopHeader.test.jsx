import React from 'react';
import TestRenderer from 'react-test-renderer';

import TopHeader from './TopHeader';

describe('TopHeader', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<TopHeader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

