import SectionLayout from "@/Layouts/SectionLayout";

import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSearchContext } from "@/StateManagement/SearchContext";
import { TbFilterSearch } from "react-icons/tb";
const SectionFeature: React.FC = () => {
    const navigate = useNavigate();
    const { searchTerm, setSearchTerm } = useSearchContext();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <SectionLayout title={"Main Feature"} columns={2} textAlignment={"left"} contentAlignment={"right"}>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#1e90ff" }}
                    whileTap={{ scale: 0.95 }}

                    className="cursor-pointer flex flex-col justify-center items-center gap-4 p-16 rounded-md"
                >
                    <div className="p-4">
                        <TbFilterSearch size={32} />
                    </div>
                    <div className="text-left w-[75%] flex flex-col items-center space-y-4 ">
                        <h1 className="text-center text-white text-2xl">Country Filter Search</h1>
                        <p>World Country provides a feature that lets the user search for a desired country by its languange, independece status, and region.</p>
                        <button
                            onClick={() => navigate("/country")}
                            className="btn btn-active btn-ghost">Try It Now!</button>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#1e90ff" }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer flex flex-col justify-center items-center gap-4 p-16 rounded-md"
                >
                    <div className="p-4">
                        <CgDetailsMore size={32} />
                    </div>
                    <div className="text-left w-[75%] flex flex-col items-center space-y-4 ">
                        <h1 className="text-center text-white text-2xl">Country Details & Search</h1>
                        <p className="text-center">Detailed information about the country, like map position and other important data.</p>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Type here"
                                value={searchTerm}
                                onChange={handleInputChange}
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                    </div>
                </motion.div>
            </SectionLayout>
        </>
    );
}

export default SectionFeature;
