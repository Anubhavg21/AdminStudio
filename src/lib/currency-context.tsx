"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Currency = "INR" | "USD";

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  toggleCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("INR");

  const toggleCurrency = () =>
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
