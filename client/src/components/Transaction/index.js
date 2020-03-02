import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { numberWithCommas } from "../../utils/format";

import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { MdClear } from "react-icons/md";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <div>
        {transaction.amount < 0 ? <FaThumbsDown style={{color: '#ff4c4c'}}/> : <FaThumbsUp style={{color: '#34bf49'}}/>}
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
          {numberWithCommas(Math.abs(transaction.amount))} {sign}
        </h3>
        <button onClick={() => deleteTransaction(transaction._id)}>
          <MdClear />
        </button>
      </div>
    </li>
  );
}
