import React from "react";
import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./extras/providers/ThemeProvider";
import { UserProvider } from "./layout/collections/users/providers/UserProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
