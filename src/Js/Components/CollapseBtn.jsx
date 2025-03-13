import React, {useState} from "react";
import EquipmentsList from "./List.jsx";

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
//todo: ajouter dans le scss l’icône pour le bouton collapse et le style du texte
//todo (suite) et le style du bouton collapse et vérifier la pertinence de l'opérateur ternaire ligne 19.
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
                   {renderContent()}
                </div>                                            
        </div>
    );    
}

export default CollapseBtn;