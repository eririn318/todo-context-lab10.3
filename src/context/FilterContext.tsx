import { createContext, useState } from "react";

export const FilterContext = createContext<FilterContextType | null>(null);

interface FilterContextType {
  filter: "all" | "active" | "completed";
  // =>void=(returns nothing)
  //  setFilter is a function that takes one argument called filter that argument is allowed to be only one of these 3 exact strings
  // 'all','active','completed'
  setFilter: (filter: "all" | "active" | "completed") => void;
}

interface FilterProviderProps {
  children: React.ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    // it provides data to all components
    // value={{filter, setFilter}}=(actuall stuff you are sharing)
    // filter=(the current filter valeu('all', 'active', 'completed') )
    <FilterContext.Provider value={{ filter, setFilter }}>
      {/* {children}=(whatever whatever you put inside this component in main.tsx) */}
      {children}
    </FilterContext.Provider>
  );
}
