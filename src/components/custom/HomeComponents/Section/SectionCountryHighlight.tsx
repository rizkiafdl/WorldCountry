import React, { useState, useEffect } from 'react';
import CarouselLayout from '@/Layouts/CarouselLayout';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isFromGlobeAtom } from '@/StateManagement/atoms';

interface CountryData {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    population: number;
    flags: {
        png: string;
    };
}

const SectionCountryHighlight: React.FC = () => {
    const [countries, setCountries] = useState<CountryData[]>([]);
    const [, setIsFromGlobe] = useAtom<boolean>(isFromGlobeAtom);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data); // Set all the countries data
            })
            .catch(error => console.error('Error fetching country data:', error));
    }, []);

    const handleDetailsClick = (countryName: string) => {
        navigate(`/country/${countryName}`);
    };

    return (
        <CarouselLayout>
            {countries.map((country) => (
                <div
                    key={country.name.common}
                    className="carousel-item relative w-72" // Ensure a fixed width
                    style={{ position: "relative" }}
                >
                    <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        className="w-full h-64 object-cover"
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-gray-800 text-white p-4"
                        style={{ textAlign: "center" }}
                    >
                        <h2 className="text-xl font-bold">{country.name.official}</h2>
                        <p>Capital: {country.capital?.[0]}</p>
                        <p>Population: {country.population.toLocaleString()}</p>
                        <button
                            onClick={() => {
                                handleDetailsClick(country.name.common)
                                setIsFromGlobe(true);
                            }}
                            className="btn btn-primary mt-2"
                        >
                            Details
                        </button>
                    </div>
                </div>
            ))}
        </CarouselLayout>
    );
};

export default SectionCountryHighlight;
