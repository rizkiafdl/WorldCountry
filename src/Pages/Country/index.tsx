import CountrySearch from "@/components/custom/CountryComponents/CountrySearch"
import Navbar from "./Navbar"
import CountryFilter from "@/components/custom/CountryComponents/CountryFilter"


const Country = () => {
    return (
        <div>
            <Navbar />
            <CountrySearch />
            <CountryFilter />

        </div>
    )
}

export default Country