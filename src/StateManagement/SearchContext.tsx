import React, { createContext, useState, useContext } from "react";

// Define the shape of the context
interface SearchContextProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

// Create the context with a default value
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// Custom hook to use the context
export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchProvider");
    }
    return context;
};

// Provider component
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }
        }>
            <div className="flex items-center m-4">
                {children}
            </div>

        </SearchContext.Provider>
    );
};
