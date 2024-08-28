import { motion } from 'framer-motion';
import SectionLayout from '@/Layouts/SectionLayout';

const SectionTeam = () => {
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
        <SectionLayout title="OUR TEAM" columns={2} contentAlignment='left' textAlignment='left'>
            <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    className="text-2xl text-white font-semibold mb-4"
                    variants={fadeInUp}
                >
                    Muhammad Rizki Afdolli
                </motion.h2>
                <motion.p
                    className="text-lg text-white leading-relaxed"
                    variants={fadeInUp}
                >
                    Full Stack Developer
                </motion.p>
            </motion.div>
            <motion.div
                className="card bg-base-100 h-[60%] w-94 shadow-xl"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                <figure>
                    <motion.img
                        src="/images/Rizki.jpg"
                        alt="Muhammad Rizki Afdolli"
                        className="rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Muhammad Rizki Afdolli
                        <motion.div
                            className="badge badge-primary"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            FULL STACK DEVELOPER
                        </motion.div>
                    </h2>
                    <motion.div
                        className="card-actions justify-start"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {['Node.js', 'React', 'Python', 'Machine Learning', 'Cloud Environment', 'Finance', 'Data Mining', 'Big Data'].map((skill, index) => (
                            <motion.div
                                key={index}
                                className="badge badge-outline"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </SectionLayout>
    );
};

export default SectionTeam;
