import React from 'react';

const Tags = ({ tags }) => {
    if (!Array.isArray(tags) || tags.length === 0) {
        return null; // Render nothing if tags is not a valid array or is empty
    }
    return (
        <div className="tags__container">
            {tags.map((tag, index) => (
                <span className="tags__container--tag" key={`${tag}-${index}`}>{tag}</span>
            ))}
        </div>
    );
};

export default Tags;