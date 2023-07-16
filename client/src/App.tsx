import React from "react";
import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./extras/providers/ThemeProvider";
import { UserProvider } from "./layout/collections/users/providers/UserProvider";
import { TwitterLayout } from "./layout/twitterLayout/TwitterLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <UserProvider>
            <TwitterLayout>
              <Router />
            </TwitterLayout>
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
