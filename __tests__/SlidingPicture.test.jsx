import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SlidingPicture from '../src/Js/Components/SlidingPicture.jsx';

describe('SlidingPicture', () => {
    const logement = {
        cover: 'cover.jpg',
        pictures: ['pic1.jpg', 'pic2.jpg'],
        title: 'Test Logement'
    };

    it('renders the first picture initially', () => {
        const { getByAltText } = render(<SlidingPicture logement={logement} />);
        expect(getByAltText('Slide 0').src).toContain('pic1.jpg'); // Corrigez l'alt attendu
    });

    it('changes picture on next and previous click', () => {
        const { getByAltText, getByLabelText } = render(<SlidingPicture logement={logement} />);
        fireEvent.click(getByLabelText('next'));
        expect(getByAltText('Slide 1').src).toContain('pic2.jpg');
        fireEvent.click(getByLabelText('previous'));
        expect(getByAltText('Slide 0').src).toContain('pic1.jpg');
    });
});