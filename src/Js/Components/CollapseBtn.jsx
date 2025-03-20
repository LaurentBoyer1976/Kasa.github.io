import React, { useState } from "react";
import EquipmentsList from "./List.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../Css/Components/CollapseBtn.css';

const ToggleChevron = ({ isOpen }) => {
    return (
        <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="collapseBtn__container--btn-icon-chevron"
        />
    );
}

const CollapseBtn = ({ id, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const renderContent = () => {
        if (React.isValidElement(children) && children.type === EquipmentsList) {
            return children;
        } else {
            return <p className="contentText">{children}</p>;
        }
    };
    return (
        <div className="collapseBtn__container" key={id}>
            <div className="collapseBtn__container--btn"
                role="button"
                aria-label="collapse button"
                aria-expanded={isOpen}>
                <h2 className="collapseBtn__container--title">{title}</h2>
                    <span className="collapseBtn__container--btn-icon"
                        role="button"
                        aria-label="collapse button"
                        onClick={handleToggle}
                        aria-expanded={isOpen}
                    >
                        <ToggleChevron isOpen={isOpen} />
                    </span>
            </div>                             
            <div 
                className="collapseBtn__container--content"
                aria-hidden={!isOpen}
            >   
                <div 
                    className="toDownToUp"
                    aria-hidden={!isOpen}
                >                        
                    {renderContent()}
                </div>
               
            </div>                                            
        </div>
    );    
}

export default CollapseBtn;