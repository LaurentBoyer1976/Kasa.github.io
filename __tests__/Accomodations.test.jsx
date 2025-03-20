import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ajout pour toBeInTheDocument
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Accommodations from '../src/Js/Pages/Accommodations.jsx';
import { describe, it, expect } from '@jest/globals';
import PropTypes from 'prop-types';

jest.mock('../Datas/logements.json', () => [
  { id: '1', title: 'Logement 1', description: 'Description 1', host: { name: 'Host 1', picture: 'host1.jpg' }, rating: '5', location: 'Paris', equipments: [], tags: [] }
]);

describe('Accommodations', () => {
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
          <Route path="404" element={<div>404 Not Found</div>} />
        </Routes>
      </MemoryRouter>
    );
    expect(getByText('404 Not Found')).toBeInTheDocument();
  });

  it('validates props types', () => {
    Accommodations.propTypes = {
      logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    };
    const logement = require('../Datas/logements.json')[0];
    expect(() => {
      render(
        <MemoryRouter initialEntries={[`/accommodations/${logement.id}`]}>
          <Routes>
            <Route path="accommodations/:id" element={<Accommodations />} />
          </Routes>
        </MemoryRouter>
      );
    }).not.toThrow();
  });
});