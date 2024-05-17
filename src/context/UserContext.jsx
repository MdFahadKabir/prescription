// UserContext.js
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState("");
  let navigate = useNavigate();
  const getDocinfo = () => {
    const data = new FormData();
    data.append("token", localStorage.getItem("token"));
    fetch(
      `${
        import.meta.env.VITE_SERVER
      }/telemedicine/getTelemedicineDoctorByIdWeb`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          navigate("/");
          localStorage.removeItem("token");
        } else {
          setUserinfo(res.message);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDocinfo();
  }, [localStorage.getItem("token")]);

  return (
    <UserContext.Provider value={{ userinfo, setUserinfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
