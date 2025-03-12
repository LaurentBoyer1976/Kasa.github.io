import React from 'react';


const EquipmentsList = ({ equipments }) => {
    const equipmentItems = equipments.map((equipment) => (
        <li className="equipments__list--item">{equipment}</li>
    ));
    return(
        <ul className="equipments__list">
            {equipmentItems}
        </ul>
    )
}

export default EquipmentsList;