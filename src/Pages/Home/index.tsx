
import Navbar from "./Navbar"
import SectionFeature from "@/components/custom/HomeComponents/Section/SectionFeature"
import SectionCountryHighlight from "@/components/custom/HomeComponents/Section/SectionCountryHighlight"


import CountryNamesOn3DGlobe from "../../components/custom/HomeComponents/Section/CountryNameOn3DGlobe"

import { SearchProvider } from "@/StateManagement/SearchContext"
import CountrySearchHome from "@/components/custom/HomeComponents/Section/CountrySearchHome"
import SectionFaq from "@/components/custom/HomeComponents/Section/SectionFaq"


const Home = () => {
    return (
        <div>
            <Navbar />
            <CountryNamesOn3DGlobe />
            <SectionCountryHighlight />
            <SearchProvider>
                <SectionFeature />
                <CountrySearchHome />
            </SearchProvider>
            <SectionFaq />
        </div>

    )
}

export default Home