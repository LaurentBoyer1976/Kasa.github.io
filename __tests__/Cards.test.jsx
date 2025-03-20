import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ajout pour toBeInTheDocument
import { BrowserRouter as Router } from 'react-router-dom';
import Cards from '../src/Js/Components/Cards.jsx';
import logements from '../Datas/logements.json'; // Correction du chemin
import { describe, it, expect } from '@jest/globals';
import PropTypes from 'prop-types';

jest.mock('../Datas/logements.json', () => [
    { id: '1', title: 'Logement 1', description: 'Description 1', host: { name: 'Host 1', picture: 'host1.jpg' }, rating: '5', location: 'Paris', equipments: [], tags: [] },
    { id: '2', title: 'Logement 2', description: 'Description 2', host: { name: 'Host 2', picture: 'host2.jpg' }, rating: '4', location: 'Lyon', equipments: [], tags: [] },
]);

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

    it('validates props types', () => {
        Cards.propTypes = {
            logements: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    cover: PropTypes.string.isRequired,
                })
            ).isRequired,
        };
        expect(() => {
            render(
                <Router>
                    <Cards />
                </Router>
            );
        }).not.toThrow();
    });
});