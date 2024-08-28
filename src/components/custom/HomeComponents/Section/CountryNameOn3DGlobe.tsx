import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isFromGlobeAtom } from '@/StateManagement/atoms';

interface CountryData {
    name: {
        common: string;
    };
    latlng: [number, number];
}

const CountryNamesOn3DGlobe: React.FC = () => {
    const [countries, setCountries] = useState<CountryData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [globeDimensions, setGlobeDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const navigate = useNavigate();
    const [, setIsFromGlobe] = useAtom<boolean>(isFromGlobeAtom);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countriesData = response.data
                    .filter((country: any) => country.latlng && country.latlng.length === 2)
                    .map((country: any) => ({
                        name: country.name.common,
                        latlng: country.latlng,
                    }));
                setCountries(countriesData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching country data:', err);
                setError('Failed to fetch country data');
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setGlobeDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLabelClick = (countryName: string) => {
        navigate(`/country/${countryName.toLowerCase()}`);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-bars loading-2xl"></span>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-800 text-white group">
            <div className="grid grid-cols-2 h-screen">
                <div className="absolute z-10 left-4 top-14 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] flex flex-col rounded-xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-4 sm:p-6 md:p-8 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-30">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome To World Country!</h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                        To get started, explore countries around the globe by hovering over the labels. Click on a label to get detailed information about the country.
                    </p>
                </div>
                <div className="absolute z-10 right-4 bottom-14 w-[80%] sm:w-auto sm:right-4 flex flex-col items-end rounded-xl p-4 sm:p-6 md:p-8 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-30 mt-4 sm:mt-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                        Created By Muhammad Rizki Afdolli
                    </p>
                </div>
            </div>

            <div className="sm:flex md:overflow-hidden  items-center justify-center bg-transparent">
                <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    labelsData={countries}
                    width={globeDimensions.width}
                    height={globeDimensions.height}
                    labelLat={(d: CountryData) => d.latlng[0]}
                    labelLng={(d: CountryData) => d.latlng[1]}
                    labelText={(d: CountryData) => d.name}
                    labelSize={1.5}
                    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                    labelDotRadius={0.5}
                    labelResolution={2}
                    animateIn={true}
                    animateRotateSpeed={0.5}
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    onLabelClick={(d: CountryData) => {
                        handleLabelClick(d.name);
                        setIsFromGlobe(true);
                    }}
                />
            </div>
        </div>
    );
};

export default CountryNamesOn3DGlobe;
