import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cards from '../src/Js/Components/Cards.jsx';
import logements from '../../../Datas/logements.json';
import { describe, it, expect } from '@jest/globals';

describe('Cards', () => {
    it('renders all cards', () => {
        const { getAllByRole } = render(
            <Router>
                <Cards />
            </Router>
        );
        const cards = getAllByRole('link');
        expect(cards.length).toBe(logements.length);
    });

    it('renders card titles correctly', () => {
        const { getByText } = render(
            <Router>
                <Cards />
            </Router>
        );
        logements.forEach(logement => {
            expect(getByText(logement.title)).toBeInTheDocument();
        });
    });
});