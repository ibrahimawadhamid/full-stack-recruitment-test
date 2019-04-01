import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BpkGridRow } from 'bpk-component-grid';


import Station from './Station';

configure({ adapter: new Adapter() });

describe('Station', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Station stationName='name' stationTime='time' />);
    });

    it('should render two Rows', () => {
        expect(wrapper.find(BpkGridRow)).toHaveLength(2);
    })

});