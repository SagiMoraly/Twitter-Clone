import React from "react";
import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./extras/providers/ThemeProvider";
import { UserProvider } from "./layout/collections/users/providers/UserProvider";
import { TwitterLayout } from "./layout/twitterLayout/TwitterLayout";
import { SnackbarProvider } from "./extras/providers/SnackbarProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <TwitterLayout>
                <Router />
              </TwitterLayout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
