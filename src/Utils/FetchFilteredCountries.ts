import axios from "axios";


interface Country {
    region: string;
    languages?: { [key: string]: string };
}

export const fetchAllRegionsAndLanguages = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries: Country[] = response.data;

        // Extract unique regions
        const regions = Array.from(new Set(countries.map((country) => country.region))).filter(Boolean);

        // Extract unique languages
        const languagesSet = new Set<string>();
        countries.forEach((country) => {
            if (country.languages) {
                Object.values(country.languages).forEach((language) => {
                    languagesSet.add(language);
                });
            }
        });
        const languages = Array.from(languagesSet);

        return { regions, languages };
    } catch (error) {
        console.error("Error fetching all regions and languages:", error);
        throw error;
    }
};

export const fetchCountriesByRegion = async (region: string) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching countries by region:", error);
        throw error;
    }
};

export const fetchCountriesByLanguage = async (language: string) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching countries by language:", error);
        throw error;
    }
};

export const fetchCountriesByIndependenceStatus = async (status: boolean) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/independent?status=${status}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching countries by independence status:", error);
        throw error;
    }
};
