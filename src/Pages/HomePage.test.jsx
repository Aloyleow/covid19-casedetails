import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import HomePage from "./HomePage";


test('basic test', () => {
    expect(true).toBe(true);
    expect(false).toBe(false)
  });

test(`import test`, () => {
    render(<HomePage/>)
})