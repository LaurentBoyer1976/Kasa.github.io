/* eslint-env jest */
/* global jest, describe, it, expect */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../src/Js/Pages/About.jsx';

jest.mock('../Datas/about.json', () => [
    { id: 'A1', title: 'Fiabilité', content: 'Description de la fiabilité' },
    { id: 'A2', title: 'Respect', content: 'Description du respect' },
]);

describe('About Page', () => {
  it('renders the About page with the banner and content', () => {
    const { getByAltText, getByText } = render(<About />);
    expect(getByAltText(/banner/i)).toBeInTheDocument();
    expect(getByText((content, element) => element.tagName === 'H2' && content.includes('Fiabilité'))).toBeInTheDocument();
  });
});
