import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider= ({ children }) =>{
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const login=()=>{
    setisAuthenticated(true);
  }
  const logout=()=>{
    setisAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setisAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;