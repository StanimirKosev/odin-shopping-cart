/* eslint-disable jest/valid-expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";

// practicing testing
// rendering elements and taking a snapshot
describe("Nav", () => {
  it("renders heading", () => {
    render(<Nav />, { wrapper: MemoryRouter });
    expect(screen.getByRole("heading", { name: /book e-commerce/i }));
  });

  it("renders Nav component", () => {
    const { container } = render(<Nav />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});

describe("Home tests", () => {
  it("renders quote author", () => {
    render(<Home />);
    expect(screen.getByTestId("author", { name: /marcus tullius cicero/i }));
  });

  it("renders Home component", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
