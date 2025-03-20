/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/Js/App';

jest.mock('../Datas/logements.json', () => [
    { id: '1', title: 'Logement 1', description: 'Description 1', host: { name: 'Host 1', picture: 'host1.jpg' }, rating: '5', location: 'Paris', equipments: [], tags: [] },
]);

jest.mock('../src/assets/IMG/BannerPicture.png', () => 'test-banner.png');

test('renders the heading "Chez vous, partout et ailleurs"', () => {
    render(<App />);
    const headingElement = screen.getByText(/Chez vous, partout et ailleurs/i); // Correction du texte attendu
    expect(headingElement).toBeInTheDocument();
});

describe('Main Test Suite', () => {
    it('should pass a dummy test', () => {
        expect(true).toBe(true);
    });
});

