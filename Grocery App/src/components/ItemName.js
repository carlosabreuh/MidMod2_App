import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ItemName = (props) => {
  const { faCheckCircle, index, faCircle } = props;

  return (
    <div className='item-name' onClick={() => props.toggleComplete(index)}>
      {props.item.isSelected ? (
        <>
          <FontAwesomeIcon icon={faCheckCircle} />
          <span className='completed'>{props.item.itemName}</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faCircle} />
          <span>{props.item.itemName}</span>
        </>
      )}
    </div>
  );
};

export default ItemName;
