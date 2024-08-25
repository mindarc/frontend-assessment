import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ExerciseOne } from ".";

vi.mock("../../components/Hero", () => ({
  Hero: () => (
    <div data-testid="mock-hero">
      <h1>Hello Developer!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  ),
}));

vi.mock("../../components/Card", () => ({
  Card: ({ bodyText }: { bodyText: string }) => (
    <div data-testid="mock-card">{bodyText}</div>
  ),
}));

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

  it("should render three cards with content", () => {
    render(<ExerciseOne />);
    const cards = screen.getAllByTestId("mock-card");
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent("Lorem ipsum dolor sit amet");
    expect(cards[1]).toHaveTextContent("Lorem ipsum dolor sit amet");
    expect(cards[2]).toHaveTextContent("Lorem ipsum dolor sit amet");
  });

  // TODO: Expand upon this test and mimic different screen sizes
  it("should have a responsive layout", () => {
    const { container } = render(<ExerciseOne />);
    const cardSection = container.querySelector(".grid");
    expect(cardSection).toHaveClass("grid-cols-1");
    expect(cardSection).toHaveClass("md:grid-cols-3");
  });
});
