/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerImg from '../src/Js/Components/BannerImg.jsx';

describe('BannerImg', () => {
    const originalConsoleError = console.error;

    beforeEach(() => {
        console.error = jest.fn(); // Mock console.error
    });

    afterEach(() => {
        console.error = originalConsoleError; // Restore original console.error
    });

    it('renders the image with the correct src and alt attributes', () => {
        const { getByAltText } = render(
            <BannerImg src="test-image.jpg" alt="Test Banner" />
        );
        const imgElement = getByAltText('Test Banner');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
    });

    it('does not render when logement is missing', () => {
        const { container } = render(<BannerImg />);
        expect(container.firstChild).toBeNull();
    });
});
