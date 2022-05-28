import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Appbar } from "./Appbar.js";

import "../../styles/home.css";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return <Appbar />;
};
