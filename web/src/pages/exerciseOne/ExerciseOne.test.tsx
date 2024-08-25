import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExerciseOne } from ".";

describe("Exercise1Page", () => {
  it("should render the hero section with correct text", () => {
    render(<ExerciseOne />);
    expect(screen.getByText("Hello Developer!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      )
    ).toBeInTheDocument();
  });

  it("should render three cards with 'Read More' buttons", () => {
    render(<ExerciseOne />);
    const readMoreButtons = screen.getAllByText("Read More");
    expect(readMoreButtons).toHaveLength(3);
  });

  // TODO: simulate different screen sizes
  it("should have a responsive layout", () => {
    const { container } = render(<ExerciseOne />);
    const cardSection = container.querySelector(".grid");
    expect(cardSection).toHaveClass("grid-cols-1");
    expect(cardSection).toHaveClass("md:grid-cols-3");
  });
});
