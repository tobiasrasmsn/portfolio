"use client";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
interface GridSectionProps {
    title: string;
    items: {
        name: string;
        image: string;
        type: string;
    }[];
}

export default function GridSection({ title, items }: GridSectionProps) {
    return (
        <div>
            <h3 className="text-xl mb-[20px]">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {items.map((item, index) => (
                    <div key={index} className="w-full cursor-pointer">
                        <div
                            className="relative w-full"
                            style={{ paddingBottom: "100%" }} // Adjusted to manage aspect ratio
                        >
                            <motion.div
                                className="bg-cover bg-center absolute w-full h-full"
                                style={{
                                    backgroundImage: `url('${item.image}')`,
                                    backgroundSize: "140%", // Ensure this is set to cover initially
                                }}
                                initial={{
                                    height: "0",
                                    backgroundSize: "100%",
                                }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 2 }}
                                whileHover={{
                                    backgroundSize: "110%", // Zoom effect on hover
                                    transition: {
                                        type: "spring",
                                    }, // Customize this transition as needed
                                }}
                            ></motion.div>
                        </div>

                        <div className="mt-[20px] flex flex-row w-[100%] justify-between">
                            <div>
                                <h2 className="text-4xl">{item.name}</h2>
                                <h3 className="text-xl">{item.type}</h3>
                            </div>
                            <div>
                                <Image
                                    src="/arrow-up-right.svg"
                                    width={50}
                                    height={50}
                                    alt=""
                                    className=""
                                />
                            </div>
                        </div>
                        <Separator className="dark mt-[10px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
