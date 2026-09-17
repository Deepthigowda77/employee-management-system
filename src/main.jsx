// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary";

// import App from "./App.jsx";
// import store from "./redux/store.js";

// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>
// );


// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <App />
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ThemeProvider from "./context/ThemeContext";

import App from "./App";
import store from "./redux/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);