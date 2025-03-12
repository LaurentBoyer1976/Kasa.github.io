import React from 'react';


const Tags = ({tags}) => {
    return(
        <div className="tags__container">
            {tags.map((tag) => (
                <span className="tags__container--tag">{tag}</span>
            ))}
        </div>
    )
}
export default Tags;