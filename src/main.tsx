import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from "./common/contexts/theme.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
