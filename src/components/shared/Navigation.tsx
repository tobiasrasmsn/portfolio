"use client";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { AnimatePresence, animate, motion } from "framer-motion";
import Image from "next/image";
import moon from "/moon.svg";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
export default function Navigation() {
    // State to handle visibility
    const [isVisible, setIsVisible] = useState(false);
    const [open, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };
    const menuVariants = {
        initial: {
            translateX: "-100%",
        },
        animate: {
            translateX: "0%",

            transition: {
                duration: 0.7,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            translateX: "-100%",

            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const toggleVisibility = () => {
        const body = document.body;
        const html = document.documentElement;

        // Recalculate the maximum height each time the user scrolls
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        // const heightWithMargin = height - 1200;
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    const toggleMode = () => {};
    return (
        <div>
            <header
                className={`w-full z-30 flex flex-row justify-between px-[6vw] py-4 fixed top-0 bg-background ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none "
                }`}
            >
                <h2>Tobias Rasmussen</h2>
            </header>
            <header
                className={`w-full flex flex-row justify-between px-[6vw] py-4 fixed top-0 ${
                    !isVisible
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none "
                }`}
            >
                <span> </span>
            </header>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed origin-top top-0 left-0 h-full w-full bg-background z-40 flex justify-center items-center"
                    >
                        <motion.ul className="flex flex-col justify-center items-center gap-5">
                            <motion.li>
                                <Link
                                    onClick={toggleMenu}
                                    href="/"
                                    className="text-xl"
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li>
                                <Link
                                    onClick={toggleMenu}
                                    href="/about"
                                    className="text-xl"
                                >
                                    About
                                </Link>
                            </motion.li>
                            <motion.li>
                                <Link
                                    onClick={toggleMenu}
                                    href="/projects"
                                    className="text-xl"
                                >
                                    Projects
                                </Link>
                            </motion.li>
                            <motion.li>
                                <Link
                                    onClick={toggleMenu}
                                    href="/contact"
                                    className="text-xl"
                                >
                                    Contact
                                </Link>
                            </motion.li>
                            <motion.li className="cursor-pointer">
                                <ThemeSwitch />
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className="z-50 fixed top-0 right-0 my-2 mr-[6vw]"
                onClick={toggleMenu}
            >
                <Hamburger />
            </div>
        </div>
    );
}
