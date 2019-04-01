import React from 'react';
import TestRenderer from 'react-test-renderer';

import AirlineLogo from './AirlineLogo';

describe('AirlineLogo', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<AirlineLogo />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});