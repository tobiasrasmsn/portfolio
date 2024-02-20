"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

interface TextSectionProps {
    heading: string;
    title: string;
    content: string;
    fullHeight: boolean;
}
export default function TextSection({
    heading,
    title,
    content,
    fullHeight,
}: TextSectionProps) {
    return (
        <div
            className={`w-full ${
                fullHeight ? "h-[1000px]" : "h-[100%]"
            }  flex flex-col justify-center`}
        >
            <motion.h3
                className="text-xl mb-[20px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
            >
                {title}
            </motion.h3>

            <div className="flex flex-col md:flex-row justify-between w-full gap-5 md:gap-20 overflow-hidden">
                <motion.h2
                    className="text-4xl font-medium text-balance w-[100%] md:w-[50%]"
                    initial={{ translateX: "-50%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 2 }}
                >
                    {heading}
                </motion.h2>
                <motion.p
                    dangerouslySetInnerHTML={{ __html: content }}
                    className="text-xl text-pretty max-w-[450px] md:max-w-[100%] md:w-[50%] ml-auto "
                    initial={{ translateX: "50%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 2 }}
                ></motion.p>
            </div>
        </div>
    );
}
