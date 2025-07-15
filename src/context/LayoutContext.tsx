import { createContext, useContext, useState, useEffect } from "react";

type Layout = "table" | "card";

type LayoutContextType = {
  layout: Layout;
  handleLayoutChange: (layout: Layout) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState<"card" | "table">(() => {
    return (localStorage.getItem("layoutMode") as "card" | "table") || "card";
  });

  const handleLayoutChange = (mode: "card" | "table") => {
    setLayout(mode);
    localStorage.setItem("layoutMode", mode);
  };

  useEffect(() => {
    const mode =
      (localStorage.getItem("layoutMode") as "card" | "table") || "card";
    setLayout(mode);
  }, [layout]);

  return (
    <LayoutContext.Provider value={{ layout, handleLayoutChange }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("useLayout must be used within LayoutProvider");
  return context;
};
