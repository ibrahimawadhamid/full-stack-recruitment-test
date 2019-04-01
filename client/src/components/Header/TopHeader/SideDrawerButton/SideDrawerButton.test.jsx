import React from 'react';
import TestRenderer from 'react-test-renderer';

import SideDrawerButton from './SideDrawerButton';

describe('SideDrawerButton', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<SideDrawerButton />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});