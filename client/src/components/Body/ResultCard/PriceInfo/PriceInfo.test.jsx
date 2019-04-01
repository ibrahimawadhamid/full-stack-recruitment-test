import React from 'react';
import TestRenderer from 'react-test-renderer';

import { PriceInfo } from './PriceInfo';

describe('PriceInfo', () => {
    it('should render correctly', () => {
        const tree = TestRenderer.create(<PriceInfo priceInfo={[{
            Agent: 'agent',
            Price: 'price'
        }]} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});