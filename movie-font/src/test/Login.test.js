import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../pages/auth/Login";

describe("Login test cases", () => {
  //test block
  test("login user", () => {
    // render the component on virtual dom
    render(<Login />);

    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    expect(emailField).toBeIntheDocument();
    expect(passwordField).toBeIntheDocument();
    expect(submitButton).toBeIntheDocument();
  });
});
