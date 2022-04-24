import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useRoute } from "next/router";

import { useStateContext } from "../context/StateContext";

import { runFirework } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFirework();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase.</h2>
        <p className="email-msg">
          Check your email for more information about order.
        </p>
        <p className="description">
          If you have any questions, please contact{" "}
          <a href="mailto:order@example.com" className="email">
            order@example.com
          </a>
        </p>
        <Link href="/" passHref>
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
