import React from 'react';
import { motion } from 'framer-motion';

const linkStyle = "text-3xl font-bold uppercase text-neutral-400 relative overflow-hidden";

const navbarVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
};

const linkVariants = {
    hover: { 
        scale: 1.1, 
        color: '#e5e7eb', // neutral-200
        transition: { duration: 0.3 } 
    },
    initial: { 
        scale: 1, 
        color: '#9ca3af', // neutral-400
        transition: { duration: 0.3 } 
    },
};

function Navbar() {
    return (
        <motion.div 
            className="fixed w-full backdrop-blur-md shadow-md py-6 px-12 flex justify-between items-center z-20"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">
                <span>EventNest.</span>
            </div>
            <div className="flex items-center gap-12">
                {["Home.", "About.", "Services.", "Contact."].map((item) => (
                    <motion.a 
                        href="#" 
                        key={item}
                        className={linkStyle}
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        {item}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
