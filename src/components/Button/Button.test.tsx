import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";
import styled from "styled-components";
import "jest-styled-components";

describe("<Button> component", () => {
  it("has the correct color", () => {
    const Buttontest = styled(Button)<ButtonProps>``;
    const { container } = render(<Buttontest color="#ffffff" label="Kaufen" />);
    expect(container.firstChild).toHaveStyleRule("color", "#ffffff");
    expect(container.firstChild).toHaveStyleRule("color", "#fffffe", {
      modifier: ":hover"
    });
    expect(1).toBe(2);
  });
});
