import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";
import { ModalProvider } from "./ModalContext";

export function App() {
  return (
    <ModalProvider>
      <TransactionProvider>
        <Header />

        <Dashboard />

        <NewTransactionModal />

        <GlobalStyle />
      </TransactionProvider>
    </ModalProvider>
  );
}
