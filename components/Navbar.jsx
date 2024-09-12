import React from 'react';
import { motion } from 'framer-motion';

const linkStyle = "text-3xl font-bold uppercase text-neutral-400 relative overflow-hidden";

const navbarVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const links = [
    {
        name : "Home.",
        path : '/'
    },
    {
        name: 'Calendar.',
        path: '/calendar'
    },
    {
        name: 'profile.',
        path: '/profile'
    },
]

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
            className="fixed top-0 w-full backdrop-blur-md shadow-md py-6 px-12 flex justify-between items-center z-20"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">
                <span>EventNest.</span>
            </div>
            <div className="flex items-center gap-12">
                {links.map((item, k) => (
                    <motion.a 
                        href={item.path}
                        key={k}
                        className={linkStyle}
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        {item.name}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
