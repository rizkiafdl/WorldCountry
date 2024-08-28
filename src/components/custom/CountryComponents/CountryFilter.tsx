import React, { useEffect, useState } from "react";
import {
    fetchCountriesByRegion,
    fetchCountriesByLanguage,
    fetchCountriesByIndependenceStatus,
    fetchAllRegionsAndLanguages,
} from "@/Utils/FetchFilteredCountries";
import CountryCard from "@/components/Elements/CountryCard";

interface CountryData {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    population: number;
    region: string;
    flags: {
        png: string;
    };
}


const CountryFilter = () => {
    const [regions, setRegions] = useState<string[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);
    const [region, setRegion] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [independenceStatus, setIndependenceStatus] = useState<boolean | null>(null);
    const [countries, setCountries] = useState<CountryData[]>([]);
    const [error, setError] = useState<string | null>(null); // State to manage errors

    useEffect(() => {
        // Fetch regions and languages when the component mounts
        const fetchRegionsAndLanguages = async () => {
            try {
                const { regions, languages } = await fetchAllRegionsAndLanguages();
                setRegions(regions as string[]);
                setLanguages(languages);
            } catch (error) {
                console.error("Error fetching regions and languages:", error);
                setError("Failed to load regions and languages. Please try again later.");
            }
        };

        fetchRegionsAndLanguages();
    }, []);

    const handleRegionChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);
        try {
            const data = await fetchCountriesByRegion(event.target.value);
            setCountries(data);
            setError(null); // Clear error if data is successfully fetched
        } catch (error) {
            console.error("Error fetching countries by region:", error);
            setError("Failed to load countries for the selected region. Please try again.");
        }
    };

    const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
        try {
            const data = await fetchCountriesByLanguage(event.target.value);
            setCountries(data);
            setError(null); // Clear error if data is successfully fetched
        } catch (error) {
            console.error("Error fetching countries by language:", error);
            setError("Failed to load countries for the selected language. Please try again.");
        }
    };

    const handleIndependenceChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const status = event.target.checked;
        setIndependenceStatus(status);
        try {
            const data = await fetchCountriesByIndependenceStatus(status);
            setCountries(data);
            setError(null); // Clear error if data is successfully fetched
        } catch (error) {
            console.error("Error fetching countries by independence status:", error);
            setError("Failed to load countries based on independence status. Please try again.");
        }
    };

    const renderAlertIfNoFilterSelected = () => {
        if (!region && !language && independenceStatus === null) {
            return (
                <div className="flex items-center justify-center  p-4">
                    <div role="alert" className="alert alert-error w-full max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Please Insert One Of The Field Above!</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-center">Filter Search</h2>
            <div className="flex gap-4 justify-center m-8">
                <label className="label cursor-pointer">
                    <span className="label-text m-8">Region</span>
                    <select
                        className="input input-bordered w-full max-w-xs"
                        value={region}
                        onChange={handleRegionChange}
                    >
                        <option value="">Select a region</option>
                        {regions.map((region) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="label cursor-pointer">
                    <span className="label-text m-8">Language</span>
                    <select
                        className="input input-bordered w-full max-w-xs"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="">Select a language</option>
                        {languages.map((language) => (
                            <option key={language} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="label cursor-pointer">
                    <span className="label-text m-8">Independent Status</span>
                    <input
                        type="checkbox"
                        checked={independenceStatus || false}
                        onChange={handleIndependenceChange}
                        className="checkbox"
                    />
                </label>
            </div>

            {error && (
                <div className="alert alert-error shadow-lg">
                    <div>
                        <span>{error}</span>
                    </div>
                </div>
            )}

            {renderAlertIfNoFilterSelected()}

            <div className="flex flex-wrap justify-center p-4 gap-16">
                {countries.map((country) => (
                    <CountryCard key={country.name.official} country={country} />
                ))}
            </div>
        </div>
    );
};

export default CountryFilter;
