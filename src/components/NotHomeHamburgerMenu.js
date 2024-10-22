import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NotHomeHamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 text-indigo-800 p-2 z-20"
                aria-label="メニュー"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav
                className={`fixed top-4 left-4 w-32 bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-0'
                }`}
            >
                <ul className="space-y-4 mt-4">
                    <li><a href="/" className="text-indigo-800 hover:text-indigo-600">Home</a></li>
                </ul>
            </nav>
        </>
    );
};

export default NotHomeHamburgerMenu;