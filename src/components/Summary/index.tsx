import { useEffect } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { api } from "../../services/api";

import { Container } from "./styles";

export function Summary() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>-R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
