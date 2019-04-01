import React from 'react';
import TestRenderer from 'react-test-renderer';

import LegStops from './LegStops';

describe('LegStops', () => {
    


    it('should render correctly', () => {
        const tree = TestRenderer.create(
            <LegStops legInfo={{ Id: 'id', Segments: [] }}
                isAdditionalStopsOpen={false}
                closeAdditionalStopsPopover={() => { }} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});