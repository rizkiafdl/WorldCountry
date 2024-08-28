import SectionLayout from '@/Layouts/SectionLayout';
import { motion } from 'framer-motion';

const SectionDefinition = () => {
    // Define the motion variants
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
        <SectionLayout title="What is World Country" columns={2}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-6"
            >
                <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl text-white font-semibold mb-4">About Us</h2>
                    <p className="text-lg text-white leading-relaxed">
                        We are passionate about building great software. We also believe in empowering people to make a difference in their communities. Our mission is to create a platform that connects people from all over the world and helps them learn around the globe.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mt-6"
            >
                <img
                    src="/images/nasa-1-unsplash.jpg"
                    alt="World View"
                    className="rounded-lg shadow-lg"
                    width="500" height="600"
                />
            </motion.div>
        </SectionLayout>
    );
};

export default SectionDefinition;
