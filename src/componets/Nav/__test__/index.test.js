import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

describe('Nav companent', () => {
    //baseline
    it('renders', ()=>{
        render(<Nav />)
    })
    //snapshot
    it('matches Nav snapshot', () =>{
        const { asFragment } = render(<Nav />)

        expect(asFragment()).toMatchSnapshot()
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange 
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  }) 

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');

    });
  })