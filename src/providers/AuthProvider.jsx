
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserInfoContext = createContext(null);

export const AuthProvider = ({ children }) => {

  let navigator = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [authUpdate, setAuthUpdate] = useState(false);

  console.log(userInfo, "==>AUTH");

  let token;
  try {
    token = JSON.parse(localStorage.getItem("token"));
  } catch (error) {
    console.error("Invalid token in localStorage", error);
    navigator("/login");
  }

  const getUserData = () => {
    setLoading(true);
    const data = new FormData();
    data.append("user_id", token?.user_id);
    fetch(`${import.meta.env.VITE_SERVER}/authority/authUser`, {
      method: "POST",
      body: data,
      headers: {
        'Authorization': `Bearer ${token?.token}`
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.user_id !== null) {
          if(res.status === "INACTIVE"){
            alert("Your account is inactive. Please contact the admin");
            setLoader(false);
            return
          }
          if (res.isComplete === "NO") {
            navigator("/setup");
          }
          setUserInfo(res);
          setLoading(false);
        } else {
          localStorage.removeItem("token");
          navigator("/login");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err)
        navigator("/login");
        setLoading(false);
      }
      );
  };
  useEffect(() => {
    getUserData();
  }, [authUpdate]);

  return (
    <>
      <UserInfoContext.Provider
        value={{
          userInfo,
          loading,
          setLoading,
          authUpdate,
          setAuthUpdate,
        }}
      >
        {children}
      </UserInfoContext.Provider>
    </>
  );
};

export function useAuth() {
  const context = useContext(UserInfoContext)
  if (!context) {
    throw new Error('useAuth must be used within a UserProvider')
  }
  return context
}
