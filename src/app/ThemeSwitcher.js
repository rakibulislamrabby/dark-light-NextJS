"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <nav className="flex justify-between items-center p-4 bg-slate-600 dark:bg-black text-white">
            {/* Left side: Logo */}
            <div className="text-2xl font-bold">
                <a href="/">Logo</a>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex space-x-6">
                <a href="#home" className="hover:text-gray-300">Home</a>
                <a href="#about" className="hover:text-gray-300">About</a>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>

            {/* Right side: Theme Toggle */}
            <div className="flex items-center space-x-2">
                <span>The current theme is: {theme}</span>
                <button
                    className="p-2 text-2xl"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </nav>
    );
};

export default ThemeSwitcher;
