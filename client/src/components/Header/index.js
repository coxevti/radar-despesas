import React from "react";

import { Container } from "./styles";

import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function Header() {
  return (
    <Container>
      <FaRegMoneyBillAlt />
      <h2>Radar de Despesas</h2>
    </Container>
  );
}
