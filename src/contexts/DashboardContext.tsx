import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { recentStreamsData } from "../dataset";
import { debounce } from "lodash";

type DashboardContextType = {
  filteredData: typeof recentStreamsData;
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortDirection: "asc" | "desc";
  setSortDirection: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("dateStreamed");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filteredData, setFilteredData] = useState(recentStreamsData || []);

  // Debounced filtering function
  const filterData = useCallback(
    debounce((filterValue) => {
      let updatedData = recentStreamsData.filter(
        (stream) =>
          stream.songName.toLowerCase().includes(filterValue.toLowerCase()) ||
          stream.artist.toLowerCase().includes(filterValue.toLowerCase())
      );
      
      setFilteredData(updatedData);
    }, 300), // 300ms debounce time
    []
  );

  useEffect(() => {
    filterData(filterBy);
  }, [filterBy]);

  // Sorting function
  useEffect(() => {
    if (!Array.isArray(filteredData)) return;
    
    setFilteredData((prevData) => {
      return [...prevData].sort((a, b) => {
        let valA = a[sortBy];
        let valB = b[sortBy];
        
        if (typeof valA === "string" && typeof valB === "string") {
          return sortDirection === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }

        return sortDirection === "asc" ? valA - valB : valB - valA;
      });
    });
  }, [sortBy, sortDirection]);

  return (
    <DashboardContext.Provider
      value={{
        filteredData,
        filterBy,
        setFilterBy,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
