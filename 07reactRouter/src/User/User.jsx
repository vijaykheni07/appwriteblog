import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {userid} = useParams();
  return <div className="bg-orange-700 p-5 m-5 text-white text-3xl rounded-xl font-semibold ">User: {userid}</div>;
};

export default User;
