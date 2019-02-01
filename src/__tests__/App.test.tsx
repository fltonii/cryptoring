import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import Login from "../pages/Login";

jest.mock("react-router-dom", () => ({
  withRouter: jest.fn().mockImplementation(component => component)
}));

test("Login snapshot", () => {
  const { container } = render(<Login />);
  expect(container.firstChild).toMatchSnapshot();
});

test("onSubmit gets called by button", () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  const usrname = getByPlaceholderText(/username/i) as HTMLInputElement;
  const pwrd = getByPlaceholderText(/password/i) as HTMLInputElement;
  const submit = getByText(/log in/i);
  usrname.value = "fltonii";
  pwrd.value = "123456";

  expect(usrname.value).toEqual("fltonii");
  expect(pwrd.value).toEqual("123456");

  submit.click();
});
