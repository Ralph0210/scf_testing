import React from "react";
import ReactDOMClient from "react-dom/client";
import { DataAnalyticsPage } from "./screens/DataAnalyticsPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DataAnalyticsPage />);
