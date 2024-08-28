import React, { useState, useEffect } from "react";
import useFetchCountry from "@/Utils/UseFetchCountry";
import CountryCard from "@/components/Elements/CountryCard"

const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState("Indonesia");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const { data, loading, error } = useFetchCountry(debouncedSearchTerm);

    // Debounce logic: delay the API call until the user stops typing
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500); // 500ms delay

        // Cleanup the timeout if the component is unmounted or if searchTerm changes
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="grid grid-cols-1 gap-8 p-8">
            <h1 className="text-white text-4xl">Search!</h1>
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Enter country name"
                    className="grow"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
            {loading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <CountryCard country={data} />
            )}
        </div>
    );
};

export default CountrySearch;
