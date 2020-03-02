import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { numberWithCommas } from "../../utils/format";

import { FaLightbulb } from "react-icons/fa";
import { MdClear } from "react-icons/md";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <div>
        <FaLightbulb />
        <span>
          <h2>{transaction.description}</h2>
          <time>
            {format(parseISO(transaction.date), "dd MMMM yyyy", {
              locale: ptBR
            })}
          </time>
        </span>
      </div>
      <div>
        <h3>
          {sign}R$ {numberWithCommas(Math.abs(transaction.amount))}
        </h3>
        <button onClick={() => deleteTransaction(transaction._id)}>
          <MdClear />
        </button>
      </div>
    </li>
  );
}
