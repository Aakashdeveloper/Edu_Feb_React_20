import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-renderer';

describe('Snapshot test',() => {
    test('Testing my footer component',()=>{
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})