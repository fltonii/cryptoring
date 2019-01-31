import * as React from "react";
import { useSetTitle } from "../hooks";

const Dashboard = (props: object) => {
  useSetTitle("Dahsboard");

  return <h1>DASH</h1>;
};

export default Dashboard;
