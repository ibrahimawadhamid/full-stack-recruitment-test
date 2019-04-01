import React from 'react';
import TestRenderer from 'react-test-renderer';

import LegStopsText from './LegStopsText';

describe('LegStopsText', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<LegStopsText legInfo={{ stopsStations: ['a', 'b'] }} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});