import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sotrage } from "./Sotrage";

const useAuth = () => {
  var id = localStorage.getItem("id");
  if (id) {
    return true;
  }
  return false;
};

export const ProtectedRoutes = () => {

    var isAuth = useAuth();
    console.log(isAuth);
    return (
        <>
            {
                isAuth ? <Outlet/> : <Sotrage/>
            }
        </>
    )

};
