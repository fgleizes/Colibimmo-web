import React, { useState } from 'react';

export const UserContext = React.createContext({
  user: {},
  token: "",
  isLoggedIn: false,
  setUser: () => { },
  setToken: () => { },
  setIsLoggedIn: () => { },
  login: () => { },
  logout: () => { }
});

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({ lastname: "", firstname: "" })
  const saveToken = (token) => {
    setToken(token)
  }
  const saveUser = (user) => {
    setUser(user)
  }
  const saveIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn)
  }
  const login = (token, user) => {
    setIsLoggedIn(true)
    setToken(token)
    setUser(user)
  }
  const logout = () => {
    setIsLoggedIn(false)
    setToken(null)
    setUser({ lastname: "", firstname: "" })
  }

  const userData = {
    token: token,
    setToken: saveToken,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: saveIsLoggedIn,
    user: user,
    setUser: saveUser,
    login: login,
    logout: logout
  }
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  )
}