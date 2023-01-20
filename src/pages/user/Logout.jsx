import { useEffect } from "react";
import { useNavigate } from "react-router";
import { removeCookie } from "../../utils/Cookie";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeCookie("jwt_token");
    navigate("/signin");
  }, []);

  return <></>;
};

export default Logout;
