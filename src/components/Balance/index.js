import React, { useState } from "react";

import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";
import AddTransaction from "../AddTransaction";

export default function Balance() {
  const [show, setShow] = useState(true);

  function handleShowAddTransaction() {
    setShow(true);
  }
  function handleCloseAddTransaction() {
    setShow(false);
  }

  return (
    <Container>
      <span>
        <h4>Seu saldo</h4>
        <h1>$ 0.00</h1>
      </span>
      <AddTransaction show={show} handleClose={handleCloseAddTransaction} />
      <button onClick={handleShowAddTransaction}>
        <FaPlus />
      </button>
    </Container>
  );
}
