import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DynamicContent } from ".";

vi.mock("../../components/Hero", () => ({
  Hero: () => (
    <div data-testid="mock-hero">
      <h1>Hello Developer!</h1>
    </div>
  ),
}));

vi.mock("../../components/TabAccordion", () => ({
  TabAccordion: ({ sections }) => (
    <div data-testid="mock-tab-accordion">
      {sections.map((section) => (
        <div key={section.id} data-testid="mock-section">
          {section.title}
        </div>
      ))}
    </div>
  ),
}));

describe("DynamicContent", () => {
  it("should render the hero section with correct text", () => {
    render(<DynamicContent />);
    expect(screen.getByText("Hello Developer!")).toBeInTheDocument();
  });

  it("should render all section titles", () => {
    render(<DynamicContent />);
    const sections = screen.getAllByTestId("mock-section");
    expect(sections).toHaveLength(4);
    expect(sections[0]).toHaveTextContent("Section 1");
    expect(sections[1]).toHaveTextContent("Section 2");
    expect(sections[2]).toHaveTextContent("Section 3");
    expect(sections[3]).toHaveTextContent("Section 4");
  });

  // TODO: Create tests for remaining requiremnets

  // it("should display data in tabs on desktop", () => {
  // });

  // it("should display data in an accordion on mobile", () => {
  // });

  // it("should only have one accordion/tab open at a time", () => {
  // });

  // it("should open the first accordion/tab on load", () => {
  // });

  // it("should close an open accordion if selected", () => {
  // });
});
