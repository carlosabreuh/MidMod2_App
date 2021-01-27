import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ItemName = (props) => {
  return (
    <div
      className="item-name"
      contenteditable="true"
      onClick={() => props.toggleComplete(props.index)}
    >
      {props.item.isSelected ? (
        <>
          <FontAwesomeIcon icon={props.faCheckCircle} />
          <span className="completed" contenteditable="true">
            {props.item.itemName}
          </span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={props.faCircle} />
          <span>{props.item.itemName}</span>
        </>
      )}
    </div>
  );
};

export default ItemName;
