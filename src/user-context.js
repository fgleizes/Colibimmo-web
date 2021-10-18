import React, { useState } from 'react';

export const UserContext = React.createContext({
  isLoggedIn: false,
  token: "",
  user: {},
  setIsLoggedIn: () => { },
  setToken: () => { },
  setUser: () => { },
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
    localStorage.setItem("isLoggedIn", true)
    localStorage.setItem("userToken", token)
    localStorage.setItem("user", JSON.stringify(user))
  }
  const logout = () => {
    setIsLoggedIn(false)
    setToken(null)
    setUser({ lastname: "", firstname: "" })
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userToken")
    localStorage.removeItem('user')
  }
      
  const userData = {
    isLoggedIn: localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn")  : isLoggedIn,
    token: localStorage.getItem("userToken") ? localStorage.getItem("userToken") : token,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : user,
    setIsLoggedIn: saveIsLoggedIn,
    setToken: saveToken,
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