import { render,screen,cleanup } from "@testing-library/react";
import Home from "../Pages/HomePage/Home";

afterEach(() => {
  cleanup();
});

test("Should see admin text", () => {
  render(<Home/>);
  const card = screen.getByTestId("HomeTest");
  expect(card).toBeInTheDocument();
  expect(card).toBeVisible();
  expect(card).toHaveTextContent("Welcome admin");
});
