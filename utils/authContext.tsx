import axios from './axios';
import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
    pfp: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/auth/login',
        data: {
          email,
          password,
        },
      });

      if (data.success && data.isVerified) {
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('pfp', data.user.pfp);
        localStorage.setItem('username', data.user.username);
      }

      return data;
    } catch (e: any) {
      return e.message;
    }
  };

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
