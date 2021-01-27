import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AddItemBox = (props) => {
    return (
        
<div className="add-item-box">
          <input
            value={props.inputValue}
            onChange={(event) => props.setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={props.faPlus}
            onClick={() => props.handleAddButtonClick()}
          />
        </div>
        
    )

}




export default AddItemBox;