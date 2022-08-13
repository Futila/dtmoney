import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import { useContext } from "react";
import { ModalContext } from "../../ModalContext";

export function Header() {
  const modalContext = useContext(ModalContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={modalContext.handleOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
