import React from 'react';


const EquipmentsList = ({ equipments }) => {
    const equipmentItems = equipments.map((equipment, index) => (
        <li className="equipments__list--item" key={equipment+index}>{equipment}</li>
    ));
    return(
        <ul className="equipments__list">
            {equipmentItems}
        </ul>
    )
}

export default EquipmentsList;