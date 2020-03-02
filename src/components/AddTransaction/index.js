import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { format } from "date-fns";

import {
  MdClear,
  MdTextFormat,
  MdAttachMoney,
  MdDateRange
} from "react-icons/md";

import { Container, ModalContent, ModalHeader, ModalBody } from "./styles";

export default function AddTransaction({ handleClose, show }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount,
      date
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount(0);
    setDate(format(new Date(), "yyyy-MM-dd"));
    handleClose();
  }

  return (
    <Container show={show}>
      <ModalContent>
        <ModalHeader>
          <h2>Adicionar nova transação</h2>
          <button onClick={handleClose}>
            <MdClear />
          </button>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <div>
              <span>
                <MdTextFormat />
              </span>
              <input
                type="text"
                id="description"
                placeholder="Descrição da despesa"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div>
              <span>
                <MdAttachMoney />
              </span>
              <input
                type="number"
                id="amount"
                placeholder="Valor gasto ou renda"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
            <div>
              <span>
                <MdDateRange />
              </span>
              <input
                type="date"
                id="date"
                placeholder="Data lançamento"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <button>Cadastrar</button>
          </form>
        </ModalBody>
      </ModalContent>
    </Container>
  );
}
