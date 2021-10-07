import React from 'react'
import { GlobalStyle } from '../GlobalStyles'
import { Logo } from '../components/Logo'
import { Detail } from '../pages/Detail'
import { Home } from '../pages/Home'
import { User } from '../pages/User'
import { NotRegister } from '../pages/NotRegister'
import { Favs } from '../pages/Favs'
import { NavBar } from '../components/Navbar'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useInitialState } from '../hooks/useInitialState'

export const App = () => {
  const initialState = useInitialState()
  const { isAuth } = initialState
  return (
    <>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <GlobalStyle />
          <Logo />
          <Switch>
            <Route exact path='/pet/:id' component={Home} />
            <Route path='/detail/:detailId' component={Detail} />
            <Route
              path='/user' render={() => {
                return isAuth ? <User /> : <NotRegister />
              }}
            />
            <Route
              path='/favs' render={() => {
                return isAuth ? <Favs /> : <NotRegister />
              }}
            />
            <Route path='/' component={Home} />
          </Switch>
          <NavBar />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}
