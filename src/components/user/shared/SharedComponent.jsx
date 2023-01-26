import React from "react";
import loading from "../../../assets/loading.gif";
import NotFound from "../../../assets/notFound.png";

export const Loading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30vh" }}>
      <img src={loading} alt="Loading" style={{ width: "100px" }} />
    </div>
  );
};

export const NotFoundMess = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "15vh" }}>
      <img src={NotFound} alt="Loading" style={{ width: "400px" }} />
    </div>
  );
};
