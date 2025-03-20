/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import Accommodations from '../src/Js/Pages/Accommodations.jsx';

jest.mock('../Datas/logements.json', () => [
    { id: '1', title: 'Logement 1', description: 'Description 1', host: { name: 'Host 1', picture: 'host1.jpg' }, rating: '5', location: 'Paris', equipments: [], tags: [] },
    { id: '2', title: 'Logement 2', description: 'Description 2', host: { name: 'Host 2', picture: 'host2.jpg' }, rating: '4', location: 'Lyon', equipments: [], tags: [] },
]);

describe('Accommodations Page', () => {
  it('renders accommodation details when ID exists', () => {
    const logement = require('../Datas/logements.json')[0];
    const { getByText } = render(
      <MemoryRouter initialEntries={[`/accommodations/${logement.id}`]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
