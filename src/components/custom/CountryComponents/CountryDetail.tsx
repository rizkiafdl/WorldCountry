import { useNavigate, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import Map from "./Map";
import Skeleton from "../../Elements/Skeleton";
import useFetchCountry from "@/Utils/UseFetchCountry";
import { useAtom } from "jotai";
import { isFromGlobeAtom } from "@/StateManagement/atoms";

const CountryDetail = () => {
    const { countryName } = useParams<{ countryName: string }>();
    const navigate = useNavigate();
    const { data: country, loading: isFetching, error } = useFetchCountry(countryName || "");
    const [isFromGlobe, SetisFromGlobe] = useAtom(isFromGlobeAtom);

    if (isFetching) return <Skeleton />;

    if (error || !country) {
        // Display an error or loading component if data fetching fails or country is not available
        return (
            <div className="flex items-center justify-center min-h-screen p-4">
                <div role="alert" className="alert alert-error w-full max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! {error || "Country data is not available."}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className="inline-block p-2 m-8 rounded-md cursor-pointer bg-black"
                onClick={() => {
                    if (isFromGlobe) {
                        navigate("/");
                        SetisFromGlobe(false);
                    } else {
                        navigate("/country");
                    }
                }}
            >
                <div className="text-xl">
                    {isFromGlobe ? "Back To Home" : "Back"}
                </div>
                <IoChevronBack size={32} />
            </div>
            <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col gap-4">
                    <img
                        className="rounded-md object-cover"
                        src={country.flags.png} alt={`${country.name.official} flag`} />
                    <h1 className="text-white text-bold text-4xl">{country.name.official}</h1>
                    <div>
                        <p>Capital: {country.capital?.[0]}</p>
                        <p>Population: {country.population.toLocaleString()}</p>
                        <p>Area: {country.area.toLocaleString()} km²</p>
                        <p>Currency: {Object.values(country.currencies)[0].name} ({Object.values(country.currencies)[0].symbol})</p>
                        <p>Language: {Object.values(country.languages).join(", ")}</p>
                    </div>
                </div>
                <div className="p-8">
                    <Map countryName={country.name.official} lat={country.latlng[0]} lng={country.latlng[1]} />
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
