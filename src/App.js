import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import React, { useState, useEffect } from 'react';

import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";

import db, { auth } from './firebase';

function App() {
  const [ theme, setTheme ] = useState('light');
  const [ rooms, setRooms ] = useState([]);
  const [ user, setUser ]   = useState(JSON.parse(localStorage.getItem('user')));

  



  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return {
          id:    doc.id,
          name:  doc.data().name
        };
      }))
    })
  }

  const signOut = () => {
    auth.signOut()
      .then( () => {
        localStorage.removeItem('user');
        setUser(null);
      })
  }

  useEffect(() => {
    getChannels();
  }, [])

  console.log("user in App")


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Router>
            {
              !user ? 
              <Login setUser={setUser} />
              :
              <Container>
                <Header user={user} theme={theme} setTheme={setTheme} signOut={signOut} />
                <Main>
                  <Sidebar rooms={rooms} />
                  <Switch>
                      <Route path="/room/:channelId">
                        <Chat user={user} />
                      </Route>
                      <Route path="/">
                        Select or Create Channel
                      </Route>
                    {/* <Route path="/">
                      <Login />
                    </Route> */}
                  </Switch>
                </Main>
              </Container>  
            }
            
          </Router>
          {/* <ThemeSwitcher>
            <button onClick={themeToggler} className="themeSwitcher">Theme: {theme}</button>
          </ThemeSwitcher> */}
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
  grid-template-rows: 38px minmax(0, 1fr);
  
`;


const Main = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;

