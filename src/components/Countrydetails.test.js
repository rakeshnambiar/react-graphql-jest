import React from "react";
import {shallow} from 'enzyme';
import 'babel-polyfill';
import Countrydetails from './Countrydetails';


describe('Simple Math function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(3).toBe(3);
    });
});

describe('Country Detail UI check', () => {
   test('Rendering the component', () => {
       const countryPage = shallow(
           <Countrydetails />
       );
       expect(countryPage).toMatchSnapshot();
   });
});

describe('Verify the input field', () => {
    it('Field exists or not', () => {
        const wrapper = shallow(<input/>);
        expect(wrapper.contains(<input/>)).toEqual(true);
    });
});


/*Posible Tests front-end

-- Fields are exists on not
-- Default value
-- Style for each ocmponent
-- Overall UI
-- Value changes
-- Nagative cases*/


/*
Posible Back-end Tests (Graphql)
--Field validation
--Insert is working currently
--Update is working currently
--Delete if any
--If any field removed
--If any field renamed
--In case any new field added*/
