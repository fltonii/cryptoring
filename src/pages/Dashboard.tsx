import * as React from "react";
import api from "../utils/api";
import { Text, Carousel, Box, Button } from "grommet";
import styled from "styled-components";

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
    <Styles.wrapper>
      <Styles.header>
        <Text size="35px" color="#eee">
          Hey there, trader!
        </Text>
        <Text size="25px" color="rgba(70.6%, 76.3%, 81.2%, 0.933)">
          This is the list of cryptocurrencies that can make you deaf!
        </Text>
      </Styles.header>

      <Carousel>
        {(currencies.slice(0, 5) || []).map((currency, i) => (
          <Styles.item key={i}>
            <Text color="#fffff" size="30px">
              {currency.id}
            </Text>
          </Styles.item>
        ))}
      </Carousel>
      <Button label={<Text color="#eee">Click here to start</Text>} />
    </Styles.wrapper>
  );
};

const Styles = {
  wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  header: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  item: styled.div`
    width: 280px;
    height: 120px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  `
};

export default Dashboard;
