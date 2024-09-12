import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // react-icons'dan menü ikonları

const linkStyle = "text-3xl font-bold text-neutral-400 relative overflow-hidden";

const navbarVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const links = [
    { name: "Ana Sayfa.", path: '/' },
    { name: "Takviminiz.", path: '/calendar' },
    { name: "Profil.", path: '/profile' }
];

const linkVariants = {
    hover: { 
        scale: 1.1, 
        color: '#e5e7eb', 
        transition: { duration: 0.3 } 
    },
    initial: { 
        scale: 1, 
        color: '#9ca3af', 
        transition: { duration: 0.3 } 
    },
};

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

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
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-12">
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={30} className="text-neutral-200" /> : <FiMenu size={30} className="text-neutral-200" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <motion.div 
                    className="absolute top-20 left-0 w-full bg-neutral-950 opacity-30 border border-neutral-800 flex flex-col items-left gap-6 py-6 z-10 px-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {links.map((item, k) => (
                        <motion.a 
                            href={item.path}
                            key={k}
                            className="text-xl font-bold text-neutral-200 hover:text-neutral-500 transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
}

export default Navbar;
