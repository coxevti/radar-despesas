import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { Container } from "./styles";

import Transaction from "../Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <Container>
      <h3>Suas transações</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Container>
  );
}
