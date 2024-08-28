import { useState, useEffect } from "react";
import useFetchCountry from "@/Utils/UseFetchCountry";
import { isFromGlobeAtom } from "@/StateManagement/atoms";
import { useSearchContext } from "@/StateManagement/SearchContext";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CountrySearchHome = () => {
    const { searchTerm } = useSearchContext();
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const { data, loading, error } = useFetchCountry(debouncedSearchTerm);
    const [, setIsFromGlobe] = useAtom(isFromGlobeAtom);
    const navigate = useNavigate();

    // Debounce logic: delay the API call until the user stops typing
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);



    const handleDetailsClick = (countryName: string) => {
        navigate(`/country/${countryName}`);
    };

    return (
        <div className="p-4 relative items-center">
            {loading && <p>loading...</p>}
            {error && <p>{error}</p>}
            <AnimatePresence>
                {data && (
                    <motion.div
                        key={data.name.common}
                        className="carousel-item relative w-72"
                        style={{ position: "relative" }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={data.flags.png}
                            alt={`${data.name.common} flag`}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-gray-800 text-white p-4 hover:bg-black"
                            style={{ textAlign: "center" }}
                        >
                            <h2 className="text-xl font-bold">{data.name.official}</h2>
                            <p>Capital: {data.capital?.[0]}</p>
                            <p>Population: {data.population.toLocaleString()}</p>
                            <button
                                onClick={() => {
                                    handleDetailsClick(data.name.common);
                                    setIsFromGlobe(true);
                                }}
                                className="btn btn-primary mt-2"
                            >
                                Details
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CountrySearchHome;
