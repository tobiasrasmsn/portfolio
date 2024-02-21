"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleMenuToggle = () => setIsOpen(!isOpen);

        window.addEventListener("menuToggle", handleMenuToggle);

        // Don't forget to clean up
        return () => window.removeEventListener("menuToggle", handleMenuToggle);
    }, [isOpen]); // dependency array
    return (
        <motion.button
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            animate={isOpen ? "open" : "closed"}
            className="w-[40px] h-[40px] cursor-pointer relative"
        >
            <motion.span
                style={{
                    left: "50%",
                    top: "35%",
                    x: "-50%",
                    y: "-50%",
                }}
                variants={{
                    open: {
                        top: "50%",
                        rotate: ["0deg", "0deg", "45deg"],
                    },
                    closed: {
                        rotate: "0deg",
                        top: ["50%", "50%", "35%"],
                    },
                }}
                className="h-[1px] w-[100%] bg-foreground absolute"
            ></motion.span>
            <motion.span
                style={{
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%",
                }}
                variants={{
                    open: {
                        opacity: 0,
                    },
                    closed: {
                        opacity: 1,
                    },
                }}
                className="h-[1px] w-[100%] bg-foreground absolute"
            ></motion.span>
            <motion.span
                style={{
                    left: "50%",
                    bottom: "35%",
                    x: "-50%",
                    y: "50%",
                }}
                variants={{
                    open: {
                        bottom: "50%",
                        rotate: ["0deg", "0deg", "-45deg"],
                    },
                    closed: {
                        rotate: "0deg",
                        bottom: ["50%", "50%", "35%"],
                    },
                }}
                className="h-[1px] w-[100%] bg-foreground absolute"
            ></motion.span>
        </motion.button>
    );
}
