import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./components/Home";

const dom = document.getElementById("root");

const root = createRoot(dom);

root.render(<Home />);
