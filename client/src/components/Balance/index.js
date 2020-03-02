import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";
import AddTransaction from "../AddTransaction";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

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
        <h1>$ {numberWithCommas(total)}</h1>
      </span>
      <AddTransaction show={show} handleClose={handleCloseAddTransaction} />
      <button onClick={handleShowAddTransaction}>
        <FaPlus />
      </button>
    </Container>
  );
}
