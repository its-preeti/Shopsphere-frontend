import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] =
    useState(null);

  // LOAD USER
  useEffect(() => {

    const savedUser =
      localStorage.getItem("user");

    if (savedUser) {

      setUser(
        JSON.parse(savedUser)
      );
    }

  }, []);

  // LOGIN
  const login = (userData) => {

    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
  };

  // LOGOUT
  const logout = () => {

    setUser(null);

    localStorage.removeItem(
      "user"
    );
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}

// CUSTOM HOOK
export const useAuth = () =>
  useContext(AuthContext);

export default AuthProvider;