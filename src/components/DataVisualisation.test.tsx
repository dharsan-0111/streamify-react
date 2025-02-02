import { render, screen } from "@testing-library/react";
import React from "react";
import DataVisualisation from "./DataVisualisation";
import { DashboardProvider } from "../contexts/DashboardContext";
import '@testing-library/jest-dom';

// Mock dataset.ts
jest.mock("../dataset.ts", () => ({
  userGrowthData: [
    { month: "Jan", totalUsers: 2000000, activeUsers: 1000000 },
    { month: "Feb", totalUsers: 2100000, activeUsers: 1100000 },
  ],
  revenueData: [
    { type: "Subscriptions", value: 2789012 },
    { type: "Advertisements", value: 567890 },
  ],
  topSongsData: [
    { name: "Anti-Hero", artist: "Taylor Swift", streams: 1234567 },
    { name: "Cruel Summer", artist: "Taylor Swift", streams: 1123456 },
  ],
}));

describe("DataVisualisation Component", () => {
  test("renders user growth data correctly", () => {
    render(<DashboardProvider>
        <DataVisualisation />
      </DashboardProvider>
    );

    // Check if the user growth sections are rendered
    expect(screen.getByText("User Growth")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("Top Songs")).toBeInTheDocument();
  });

  test("renders revenue data correctly", () => {
    render(<DashboardProvider>
        <DataVisualisation />
      </DashboardProvider>
    );

    // Check for the presence of revenue-related text
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("Subscriptions")).toBeInTheDocument();
    expect(screen.getByText("Advertisements")).toBeInTheDocument();
  });

  test("renders top songs correctly", () => {
    render(<DashboardProvider>
        <DataVisualisation />
      </DashboardProvider>
    );

    // Check for the presence of top songs section heading
    expect(screen.getByText("Top Songs")).toBeInTheDocument();
  });
});
