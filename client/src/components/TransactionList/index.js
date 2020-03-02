import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { Container } from "./styles";

import Transaction from "../Transaction";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h3>Suas transações</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </Container>
  );
}
