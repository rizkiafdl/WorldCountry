import SectionDefinition from "@/components/AboutComponents/SectionDefinition"
import Navbar from "./Navbar"
import SectionMission from "@/components/AboutComponents/SectionMission"
import SectionTeam from "@/components/AboutComponents/SectionTeam"
import SectionFaq from "@/components/custom/HomeComponents/Section/SectionFaq"
const About = () => {
    return (
        <div>
            <Navbar />
            <SectionDefinition />
            <SectionMission />
            <SectionTeam />
            <SectionFaq />
        </div>
    )
}

export default About