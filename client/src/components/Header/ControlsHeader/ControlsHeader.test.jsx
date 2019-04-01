import React from 'react';
import TestRenderer from 'react-test-renderer';

import ControlsHeader from './ControlsHeader';

describe('ControlsHeader', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<ControlsHeader />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});