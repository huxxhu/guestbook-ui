import { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState('')
  return <UserContext.Provider value={{ isLogin, setIsLogin, token, setToken }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
