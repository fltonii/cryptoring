import * as React from "react";
import api from "../utils/api";

const Dashboard = () => {
  const [currencies, setCurrencies] = React.useState([{ id: "none" }]);
  React.useEffect(() => {
    api
      .currencies()
      .then(res => setCurrencies(res.data))
      .catch(err => {
        throw new Error(err);
      });
  }, []);
  return (
    <ul>
      {currencies.map(currency => (
        <li>
          <h3 style={{ color: "#eee" }}>{currency.id}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Dashboard;
