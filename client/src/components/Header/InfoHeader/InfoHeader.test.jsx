import React from 'react';
import TestRenderer from 'react-test-renderer';

import InfoHeader from './InfoHeader';

describe('InfoHeader', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<InfoHeader />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
