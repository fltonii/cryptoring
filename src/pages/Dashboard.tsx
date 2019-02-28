import * as React from "react";
import api from "../utils/api";

const Dashboard = () => {
  const [currencies, setCurrencies] = React.useState([{ id: "none" }]);

  console.log(currencies);

  React.useEffect(() => {
    api
      .currencies()
      .then(res => setCurrencies(res.data))
      .catch(err => {
        throw new Error(err);
      });
  }, []);

  return <h3 style={{ color: "#eee" }}>jjjjj</h3>;
};

export default Dashboard;
