import React from 'react';
import { motion } from 'framer-motion';

const linkStyle = "text-xl font-bold uppercase text-neutral-400 relative";

const navbarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
};

const linkVariants = {
    hover: { scale: 1.1, color: "#000", transition: { duration: 0.3 } },
    initial: { scale: 1, color: "#9CA3AF", transition: { duration: 0.3 } },
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
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-neutral-500 origin-left"
                            variants={{
                                hover: { scaleX: 1, opacity: 1 },
                                initial: { scaleX: 0, opacity: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
