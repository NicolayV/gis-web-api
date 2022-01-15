import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const GisMap = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <div>GisMap</div>

      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default GisMap;
