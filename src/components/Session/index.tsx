import React, { useContext, useState, useEffect, createContext } from "react";
import { FirebaseContext } from "../Firebase";

export const AuthContext = createContext<firebase.User | null>(null);

export const AuthProvider = ({ children }: any) => {
  const firebase = useContext(FirebaseContext);

  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  useEffect(
    () => firebase?.auth.onAuthStateChanged((user) => setAuthUser(user)),
    []
  );

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};
