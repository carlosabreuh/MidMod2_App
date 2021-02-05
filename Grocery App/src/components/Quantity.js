import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Quantity = (props) => {
  const { handleQuantityDecrease, handleQuantityIncrease, index, faChevronRight, faChevronLeft } = props;
  return (
    <div className='quantity'>
      <button>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => handleQuantityDecrease(index)}
        />
      </button>
      <span> {props.item.quantity} </span>
      <button>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => handleQuantityIncrease(index)}
        />
      </button>
    </div>
  );
};



export default Quantity;