import * as React from "react";
import { useSetTitle } from "../hooks";

var ex = new WebSocket("wss://ws.kraken.com");

ex.onopen = () => {
  ex.send(
    JSON.stringify({
      event: "subscribe",
      pair: ["XBT/EUR"],
      subscription: {
        name: "trade"
      }
    })
  );
};

const Dashboard = (props: object) => {
  const [current, setCurrent] = React.useState("enstablishing connection");
  ex.onmessage = evt => {
    const data = JSON.parse(evt.data);
    console.log(data);
    if (Array.isArray(data)) {
      setCurrent(data[0][0]);
    }
  };

  useSetTitle("Dahsboard");
  return (
    <>
      <h1 style={{ color: "#eee" }}>{current}</h1>
      <button
        type="button"
        onClick={() => ex.send(JSON.stringify({ event: "ping" }))}
      >
        Ping
      </button>
    </>
  );
};

export default Dashboard;
