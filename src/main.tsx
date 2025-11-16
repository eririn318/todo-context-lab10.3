// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { TodosProvider } from './context/TodosContex.tsx'
// import { FilterProvider } from './context/FilterContext.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <TodosProvider>
//   <FilterProvider>
//     <App />
//     </FilterProvider>
//     </TodosProvider>
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosProvider } from "./context/TodosContext.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodosProvider>
      <FilterProvider>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </FilterProvider>
    </TodosProvider>
  </StrictMode>,
);