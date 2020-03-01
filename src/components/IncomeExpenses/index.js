import React from "react";

import { Container } from "./styles";

export default function IncomeExpenses() {
  return (
    <Container>
      <div>
        <h4>Renda</h4>
        <p className="money plus">+$0.00</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className="money minus">-$0.00</p>
      </div>
    </Container>
  );
}
