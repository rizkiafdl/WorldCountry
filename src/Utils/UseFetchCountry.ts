import { useState, useEffect } from "react";
import axios from "axios";

interface CountryData {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    area: number;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    latlng: [number, number];
}

interface UseFetchCountryResult {
    data: CountryData | null;
    loading: boolean;
    error: string | null;
}

const useFetchCountry = (countryName: string): UseFetchCountryResult => {
    const [data, setData] = useState<CountryData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true);
            setError(null); // Reset error before making a new request
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
                );
                if (response.data && response.data.length > 0) {

                    setData(response.data[0]);
                } else {
                    setError("No country data found");
                    setData(null); // Clear any previous data
                }
            } catch (err) {
                setError("Failed to fetch country data");
                setData(null); // Clear any previous data
            } finally {
                setLoading(false);
            }
        };

        if (countryName) {
            fetchCountry();
        } else {
            setLoading(false);
        }
    }, [countryName]);

    return { data, loading, error };
};

export default useFetchCountry;
