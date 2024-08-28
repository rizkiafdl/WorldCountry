import React from "react";
import { useNavigate } from "react-router-dom";

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

interface CountryCardProps {
    country: CountryData;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/country/${country.name.common}`);
    };

    if (!country) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-bars loading-2xl"></span>
            </div>
        );
    }
    return (
        <div key={country.name.common} className="card bg-base-100 w-96 shadow-xl">
            <figure style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </figure>
            <div className="card-body gap-8">
                <div>
                    <h2 className="card-title">{country.name.official}</h2>
                    <p>Capital: {country.capital?.[0]}</p>
                    <p>Region: {country.region}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                </div>

                <button
                    onClick={handleDetailsClick}
                    className="btn btn-primary"
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default CountryCard;
