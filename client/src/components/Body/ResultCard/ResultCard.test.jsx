import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultCard from './ResultCard';
import Leg from './Leg/Leg';
import PriceInfo from './PriceInfo/PriceInfo';

configure({ adapter: new Adapter() });

describe('ResultCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ResultCard
                itinerary={
                    {
                        Id: null,
                        OutboundLeg: {},
                        InboundLeg: {},
                        pricingOptions: [{
                            Agent: "anyAgent",
                            Price: 123
                        }]
                    }} />);
    });

    it('should render two Legs components', () => {
        expect(wrapper.find(Leg)).toHaveLength(2);
    })

    it('should render PriceInfo', () => {
        expect(wrapper.find(PriceInfo)).toHaveLength(1);
    })
});
