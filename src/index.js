import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Add query client provider when working with react query */}
    <QueryClientProvider client={queryClient}><App /></QueryClientProvider>
  </React.StrictMode>
);
