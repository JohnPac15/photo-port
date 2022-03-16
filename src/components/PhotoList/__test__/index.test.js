import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PhototList from '../'

afterEach(cleanup)

describe('PhotoList is redning', ()=>{
    it('renders', ()=>{
        render(<PhototList />)
    })

    it('matches snapshot', ()=> {
        const { asFragment } = render(<PhototList />)

        expect(asFragment()).toMatchSnapshot()
    })
})