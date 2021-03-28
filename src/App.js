import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import React, { useState } from 'react';

import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";

function App() {
  const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Router>
            <Container>
              <Header />
              <Main>
                <Sidebar />
                <Switch>
                  <Route path="/room">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch>
              </Main>
            </Container>  
          </Router>
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
  
`;


const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;