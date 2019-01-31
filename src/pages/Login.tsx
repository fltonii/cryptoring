import * as React from "react";
import { Box, TextInput, Text, Button } from "grommet";
import { ContentWrapper } from "../components/";
import { useSetTitle } from "../hooks";
import { Link } from "react-router-dom";

const Login = (props: object) => {
  const [formVal, setFormVal] = React.useState({
    username: "",
    password: ""
  });

  useSetTitle("Login");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(formVal);
    setFormVal({ ...formVal, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <ContentWrapper>
      <Box
        direction="column"
        align="center"
        justify="center"
        background="light-2"
        pad={{ vertical: "small", horizontal: "medium" }}
        elevation="medium"
        width="30vw"
        height="50vh"
      >
        <Text>Login</Text>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
          <TextInput
            name="username"
            placeholder="username"
            value={formVal.username}
            onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
          />
          <br />
          <TextInput name="password" placeholder="password" />
          <br />
          <Link to="/">
            <Button type="submit" color="main" hoverIndicator label="Log In!" />
          </Link>
        </form>
        <pre>{JSON.stringify(formVal)}</pre>
      </Box>
    </ContentWrapper>
  );
};

export default Login;
