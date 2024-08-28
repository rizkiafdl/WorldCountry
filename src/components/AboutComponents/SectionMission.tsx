import SectionLayout from '@/Layouts/SectionLayout';
import { motion } from 'framer-motion';

const SectionMission = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <SectionLayout title="World Country Motivation" columns={2} contentAlignment="left" textAlignment="right">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mt-6"
            >
                <img
                    src="src/assets/nasa-2-unsplash.jpg"
                    alt="World View"
                    className="rounded-lg shadow-lg"
                    width="500" height="600"
                />
            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-6"
            >
                <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl text-white font-semibold mb-4">Vision</h2>
                    <p className="text-lg text-white leading-relaxed">
                        Our Vision is to provide anyone in the world with information about country with interactive visualization and accurate information.
                    </p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl text-white font-semibold mb-4">Mission</h2>
                    <p className="text-lg text-white leading-relaxed">Up to date data</p>
                    <p className="text-lg text-white leading-relaxed">Interactive visualization</p>
                    <p className="text-lg text-white leading-relaxed">Maintenance</p>
                </motion.div>
            </motion.div>
        </SectionLayout>
    );
};

export default SectionMission;
