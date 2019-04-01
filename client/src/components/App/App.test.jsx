import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import ConnectedApp from './App';

describe('App', () => {

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ConnectedApp />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

