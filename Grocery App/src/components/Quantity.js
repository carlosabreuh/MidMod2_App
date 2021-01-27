import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quantity = (props) => {
  return (
    <div className="quantity">
      <button>
        <FontAwesomeIcon
          icon={props.faChevronLeft}
          onClick={() => props.handleQuantityDecrease(props.index)}
        />
      </button>
      <span> {props.item.quantity} </span>
      <button>
        <FontAwesomeIcon
          icon={props.faChevronRight}
          onClick={() => props.handleQuantityIncrease(props.index)}
        />
      </button>
    </div>
  );
};



export default Quantity;