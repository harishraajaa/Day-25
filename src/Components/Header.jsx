import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
        <div className="col"><b>Cart Summary</b></div>
          <div className="col">Total Quantity: {cardQuantity}</div>
          <div className="col">Total Price : { (cardAmount).toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to Pay</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
