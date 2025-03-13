import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../src/Js/Components/Banner.jsx';
import { describe, it, expect } from 'jest';

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
        expect(getByAltText('banner')).toBeInTheDocument();
    });
});