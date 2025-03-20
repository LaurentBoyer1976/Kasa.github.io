/* eslint-env jest */
/* global describe, test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingStars from '../src/Js/Components/RatingStars';

describe('RatingStars Component', () => {
    test('renders the correct number of pink and grey stars for a given rating', () => {
        const rating = 3;
        render(<RatingStars rating={rating} />);

        // Vérifie que le nombre d'étoiles roses correspond à la note
        const pinkStars = screen.getAllByTestId('pink-star');
        expect(pinkStars.length).toBe(rating);

        // Vérifie que le nombre d'étoiles grises correspond à la différence avec 5
        const greyStars = screen.getAllByTestId('grey-star');
        expect(greyStars.length).toBe(5 - rating);
    });

    test('renders all grey stars when rating is 0', () => {
        const rating = 0;
        render(<RatingStars rating={rating} />);

        const pinkStars = screen.queryAllByTestId('pink-star');
        expect(pinkStars.length).toBe(0);

        const greyStars = screen.getAllByTestId('grey-star');
        expect(greyStars.length).toBe(5);
    });

    test('renders all pink stars when rating is 5', () => {
        const rating = 5;
        render(<RatingStars rating={rating} />);

        const pinkStars = screen.getAllByTestId('pink-star');
        expect(pinkStars.length).toBe(5);

        const greyStars = screen.queryAllByTestId('grey-star');
        expect(greyStars.length).toBe(0);
    });
});
