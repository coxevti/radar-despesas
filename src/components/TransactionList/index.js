import React from "react";

import { Container } from "./styles";

import { FaLightbulb } from "react-icons/fa";
import { MdClear } from "react-icons/md";

export default function TransactionList() {
  return (
    <Container>
      <h3>Suas transações</h3>
      <ul>
        <li className="minus">
          <div>
            <FaLightbulb />
            <span>
              <h2>Almoço</h2>
              <time>20 Fevereiro 2020</time>
            </span>
          </div>
          <div>
            <h3>-$13.00</h3>
            <button>
              <MdClear />
            </button>
          </div>
        </li>
        <li className="plus">
          <div>
            <FaLightbulb />
            <span>
              <h2>Sat Piramidems</h2>
              <time>10 Fevereiro 2020</time>
            </span>
          </div>
          <div>
            <h3>-$160.00</h3>
            <button>
              <MdClear />
            </button>
          </div>
        </li>
      </ul>
    </Container>
  );
}
