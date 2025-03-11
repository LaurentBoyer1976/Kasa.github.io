import React, {useState} from "react";

const CollapseBtn = ({ id, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapseBtn__container" key={id}>
                <h2 className="collapseBtn__container--title">{title}</h2>
                <span className="collapseBtn__container--btn-icon"
                    role="button"
                    aria-label="collapse button"
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                >
                    {isOpen ? "-" : "+"}
                </span>
                
                <div 
                    className="collapseBtn__container--content"
                    aria-hidden={!isOpen}
                >
                    <p className="contentText">
                        {children}                        
                    </p>
                </div>                                            
        </div>
    );    
}

export default CollapseBtn;