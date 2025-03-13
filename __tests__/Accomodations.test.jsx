import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Accommodations from '../src/Js/Pages/Accommodations.jsx';
import logements from '../Datas/logements.json';
//import { describe, it, expect } from 'jest';

describe('Accommodations', () => {
    it('renders accommodation details when ID exists', () => {
        const logement = logements[0];
        const { getByText } = render(
            <MemoryRouter initialEntries={[`/accommodations/${logement.id}`]}>
                <Routes>
                    <Route path="accommodations/:id" element={<Accommodations />} />
                </Routes>
            </MemoryRouter>
        );
        expect(getByText(logement.title)).toBeInTheDocument();
    });

    it('redirects to 404 when ID does not exist', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/accommodations/nonexistent-id']}>
                <Routes>
                    <Route path="accommodations/:id" element={<Accommodations />} />
                    <Route path="404" element={<div>404 Not Found</div>} />
                </Routes>
            </MemoryRouter>
        );
        expect(getByText('404 Not Found')).toBeInTheDocument();
    });
});