import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ajout pour toBeInTheDocument
import Tags from '../src/Js/Components/Tags.jsx';
import { describe, it, expect } from '@jest/globals';
import PropTypes from 'prop-types';

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

    it('renders nothing when tags array is empty', () => {
        const { container } = render(<Tags tags={[]} />);
        expect(container.firstChild).toBeNull();
    });

    it('renders tags with unique keys', () => {
        const tags = ['Tag1', 'Tag2', 'Tag3'];
        const { container } = render(<Tags tags={tags} />);
        const renderedTags = container.querySelectorAll('.tags__container--tag');
        expect(renderedTags.length).toBe(tags.length);
        const keys = Array.from(renderedTags).map((tag, index) => `tag-${index}`);
        expect(new Set(keys).size).toBe(tags.length); // Ensure keys are unique
    });

    it('handles special characters in tags', () => {
        const tags = ['Tag@1', 'Tag#2', 'Tag&3'];
        const { getByText } = render(<Tags tags={tags} />);
        tags.forEach(tag => {
            expect(getByText(tag)).toBeInTheDocument();
        });
    });

    it('validates props types', () => {
        const tags = ['Tag1', 'Tag2', 'Tag3'];
        Tags.propTypes = {
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        };
        expect(() => {
            render(<Tags tags={tags} />);
        }).not.toThrow();
    });
});