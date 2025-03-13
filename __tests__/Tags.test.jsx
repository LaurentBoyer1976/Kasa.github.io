import React from 'react';
import { render } from '@testing-library/react';
import Tags from '../src/Js/Components/Tags.jsx';
import { describe, it, expect } from 'jest';

describe('Tags', () => {
    it('renders tags correctly', () => {
        const tags = ['Tag1', 'Tag2', 'Tag3'];
        const { getByText } = render(<Tags tags={tags} />);
        tags.forEach(tag => {
            expect(getByText(tag)).toBeInTheDocument();
        });
    });

    it('renders nothing when tags is not an array', () => {
        const { container } = render(<Tags tags={null} />);
        expect(container.firstChild).toBeNull();
    });
});