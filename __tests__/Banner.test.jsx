/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../src/Js/Components/Banner.jsx';

describe('Banner', () => {
    it('renders children when passed in', () => {
        const { getByText } = render(
            <Banner>
                <div>Test Child</div>
            </Banner>
        );
        expect(getByText('Test Child')).toBeInTheDocument();
    });

    it('renders default content when no children are passed', () => {
        const { getByAltText } = render(
            <Banner assets="test-banner.jpg" />
        );
        const imgElement = getByAltText('Default banner');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'test-banner.jpg');
        expect(imgElement).toHaveClass('banner__container--img');
    });
});