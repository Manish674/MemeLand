import axios from './axios';
import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = (token) => {};

  const isUserValid = async (token: string) => {
    try {
      // const token = document.cookie;
      if (!token) return;

      const { data } = await axios({
        url: 'auth/validate',
        headers: {
          authentication: `Bearer ${token}`,
        },
      });

      return data;
      // set the user
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userDetails,
        setUserDetails,
        isLoggedIn,
        setIsLoggedIn,
        isUserValid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
