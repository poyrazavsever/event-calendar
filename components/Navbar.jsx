import React from 'react';
import { motion } from 'framer-motion';

const linkStyle = "text-xl font-bold uppercase text-neutral-400 relative overflow-hidden";

const navbarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
};

const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    initial: { scale: 1, transition: { duration: 0.3 } },
};

function Navbar() {
    return (
        <motion.div 
            className="fixed w-full bg-white/10 backdrop-blur-md shadow-md py-6 px-12 flex justify-between items-center z-20"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
                <span>EventNest.</span>
            </div>
            <div className="space-x-4">
                {["Home", "About", "Services", "Contact"].map((item) => (
                    <motion.a 
                        href="#" 
                        key={item}
                        className={linkStyle}
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        {item}
                        <motion.div
                            className="absolute inset-0 bg-violet-700 bg-opacity-50 opacity-0 blur-sm rounded-full transition-all duration-300"
                            variants={{
                                hover: { opacity: 0.5, scale: 1.2 },
                                initial: { opacity: 0, scale: 1 }
                            }}
                        />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
