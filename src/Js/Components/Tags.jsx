import React from 'react';


const Tags = ({tags}) => {
    return(
        <div className="tags__container">
            {tags.map((tag, index) => (
                <span className="tags__container--tag" key={tag+index}>{tag}</span>
            ))}
        </div>
    )
}
export default Tags;