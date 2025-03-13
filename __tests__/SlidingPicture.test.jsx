import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SlidingPicture from '../src/Js/Components/SlidingPicture.jsx';
import { describe, it, expect } from 'jest';

describe('SlidingPicture', () => {
    const logement = {
        cover: 'cover.jpg',
        pictures: ['pic1.jpg', 'pic2.jpg'],
        title: 'Test Logement'
    };

    it('renders the first picture initially', () => {
        const { getByAltText } = render(<SlidingPicture logement={logement} />);
        expect(getByAltText(logement.title).src).toContain('cover.jpg');
    });

    it('changes picture on next and previous click', () => {
        const { getByAltText, getByText } = render(<SlidingPicture logement={logement} />);
        fireEvent.click(getByText('❯'));
        expect(getByAltText(logement.title).src).toContain('pic1.jpg');
        fireEvent.click(getByText('❮'));
        expect(getByAltText(logement.title).src).toContain('cover.jpg');
    });
});